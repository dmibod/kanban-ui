import React from 'react';
import { connect } from 'react-redux';
import { createBoard, filterBoards } from '../actions/board';
import Auth from './Auth';

const Header = ({ secure, owner, visible, createBoard, filterBoards }) => {
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
            createBoard(input.value, secure ? owner : 'anonymous');
            input.value = '';
          }}
        >
          <i className="fa fa-fw fa-check" />
        </button>
      </div>
    );
  };

  return (
    <nav className="navbar bg-dark navbar-dark fixed-top" style={{visibility: visible ? 'visible' : 'hidden'}}>
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
                <Auth getToken={()=>input.value.trim()} clearValue={()=>input.value=''}/>
              </div>
              <input
                type="search"
                className="form-control form-control-sm"
                placeholder={secure ? "Board title..." : "Token..."}
                ref={node => (input = node)}
              />
              {createButton()}
              <div className="input-group-append">
                <button
                  className="btn btn-info btn-sm"
                  onClick={e => {
                    filterBoards(input.value.trim());
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
  owner: state.auth.user,
  visible: state.activeBoard == null
});

export default connect(
  mapStateToProps,
  { createBoard, filterBoards }
)(Header);
