import React from 'react';
import { connect } from 'react-redux';
import { createBoard, setVisibilityFilter } from '../../actions/board';
import GoogleAuth from '../GoogleAuth';

const Header = ({ secure, owner, create, filter }) => {
  let input;

  const createButton = () => {
    if (!secure) {
      return null;
    }

    return (
      <div className="input-group-append">
        <button
          className="btn btn-info btn-sm"
          onClick={e => {
            if (!input.value.trim()) {
              return;
            }
            console.log(secure, owner);
            create(input.value, secure ? owner : 'anonymous');
            input.value = '';
          }}
        >
          <i className="fa fa-fw fa-check" />
        </button>
      </div>
    );
  };

  return (
    <nav className="navbar bg-dark navbar-dark fixed-top">
      <div className="container-fluid no-gutters">
        <div className="col-12 col-sm-9 col-md-6 col-lg-3 ml-auto mr-auto">
          <form
            className="input-group"
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <div className="input-group">
              <div className="input-group-prepend">
                <GoogleAuth />
              </div>
              <input
                type="search"
                className="form-control form-control-sm"
                placeholder="Board title..."
                ref={node => (input = node)}
              />
              {createButton()}
              <div className="input-group-append">
                <button
                  className="btn btn-info btn-sm"
                  onClick={e => {
                    filter(input.value.trim());
                  }}
                >
                  <i className="fa fa-fw fa-search" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  secure: state.auth.isSignedIn,
  owner: state.auth.userProfile && state.auth.userProfile.id
});

const mapDispatchToProps = dispatch => ({
  create: (title, owner) => createBoard(title, owner)(dispatch),
  filter: title => dispatch(setVisibilityFilter(title))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
