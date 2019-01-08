import React from 'react';
import { connect } from 'react-redux';
import { addTodo, setVisibilityFilter } from '../actions';
import GoogleAuth from '../components/GoogleAuth';

const AddTodo = ({ secure, dispatch }) => {
  let input;

  const create = () => {
    if (!secure) {
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
            dispatch(addTodo(input.value));
            input.value = '';
          }}
        >
          Create
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
            <div className="input-group-append">
              <GoogleAuth />
            </div>
            <input
              type="search"
              className="form-control form-control-sm"
              placeholder="Board title..."
              ref={node => (input = node)}
            />
            {create()}
            <div className="input-group-append">
              <button
                className="btn btn-success btn-sm"
                onClick={e => {
                  dispatch(setVisibilityFilter(input.value.trim()));
                }}
              >
                <i className="fa fa-fw fa-search" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({ secure: state.auth.isSignedIn });

export default connect(mapStateToProps)(AddTodo);
