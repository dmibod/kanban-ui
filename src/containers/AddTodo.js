import React from 'react';
import { connect } from 'react-redux';
import { addTodo, setVisibilityFilter } from '../actions';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <div className="container-fluid">
        <form
          className="input-group ml-auto mr-auto"
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <div className="input-group">
            <input
              type="text"
              className="form-control form-control-sm"
              ref={node => (input = node)}
            />
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
            <div className="input-group-append">
              <button
                className="btn btn-warning btn-sm"
                onClick={e => {
                  input.value = '';
                  dispatch(setVisibilityFilter(''));
                }}
              >
                Reset
              </button>
            </div>
            <div className="input-group-append">
              <button
                className="btn btn-success btn-sm"
                onClick={e => {
                  dispatch(setVisibilityFilter(input.value.trim()));
                }}
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default connect()(AddTodo);
