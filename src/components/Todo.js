import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, id, text }) => (
  <div id="{id}" className="card-wrapper float-left m-3" onClick={onClick}>
    <div className="card shadow" style={{width:'150px', height: '150px'}}>
      <div className="card-header">
        <div className="card-title mb-0">{text}</div>
      </div>
      <div className="card-body py-2" style={{overflow:'hidden'}}>
        <div className="card-text small text-justify"></div>
      </div>
    </div>
  </div>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
