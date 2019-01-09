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
          className="btn btn-success btn-sm"
          onClick={e => {
            if (!input.value.trim()) {
              return;
            }
            update(board.id, input.value);
            input.value = '';
          }}
        >
          <i className="fa fa-fw fa-check" />
        </button>
      </div>
    );
  };

  return (
    <nav className="navbar bg-dark navbar-dark">
      <div className="container-fluid no-gutters">
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 ml-auto">
          <form
            className="input-group ml-auto mr-auto"
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <div className="input-group">
              <div className="input-group-prepend">
                <Link to={`${root}/`} className="btn btn-success btn-sm">
                  <i className="fa fa-fw fa-home" />
                </Link>
              </div>
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
        <div className="mr-auto">
          <button className="btn btn-sm text-white">
            <i className="fa fa-fw fa-file" />
          </button>
          <button className="btn btn-sm text-white">
            <i className="fa fa-fw fa-filter" />
          </button>
          <button className="btn btn-sm text-white">
            <i className="fa fa-fw fa-eye" />
          </button>
          <button className="btn btn-sm text-white">
            <i className="fa fa-fw fa-gear" />
          </button>
          <button className="btn btn-sm text-white">
            <i className="fa fa-fw fa-refresh" />
          </button>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    editable:
      state.auth.isSignedIn &&
      ownProps.board &&
      ownProps.board.owner === state.auth.userProfile.id
  };
};

const mapDispatchToProps = dispatch => ({
  update: (id, title) => renameBoard(id, title)(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
