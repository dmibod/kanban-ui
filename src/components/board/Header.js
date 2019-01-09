import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { renameBoard } from '../../actions';
import { root } from '../../apis/urls';


const Header = ({ editable, update, board }) => {
  let input;

  const updateButton = () => {
    if (!editable) {
      return null;
    }

    return (
      <div className="input-group-append">
        <button
          className="btn btn-primary btn-sm"
          onClick={e => {
            if (!input.value.trim()) {
              return;
            }
            update(board.id, input.value);
            input.value = '';
          }}
        >
          Update
        </button>
      </div>
    );
  };

  return (
    <nav className="navbar bg-dark navbar-dark fixed-top">
      <div className="container-fluid">
        <form
          className="input-group ml-auto mr-auto"
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <div className="input-group">
            <Link
              to={`${root}/`}
              className="btn btn-secondary btn-sm"
            >
              <i className="fa fa-fw fa-home" />
            </Link>
            <input
              type="search"
              className="form-control form-control-sm"
              defaultValue={board.name}
              ref={node => (input = node)}
            />
            {updateButton()}
          </div>
        </form>
      </div>
    </nav>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    editable: state.auth.isSignedIn && ownProps.board && ownProps.board.owner === state.auth.userProfile.id
  };
};

const mapDispatchToProps = dispatch => ({
  update: (id, title) => dispatch(renameBoard(id, title))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
