import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addTodo(input.value));
        input.value = '';
      }}
    >
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          ref={node => (input = node)}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            type="submit"
            id="button-add"
          >
            Add Board
          </button>
        </div>
      </div>
    </form>
  );
};

export default connect()(AddTodo);
