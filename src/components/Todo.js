import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, onTrash, id, text, selected }) => (
  <div id="{id}" className="card-wrapper float-left m-3" onClick={onClick}>
    <div className="card shadow" style={{ width: '150px', height: '150px' }}>
      <div className="card-header">
        <div className="card-title mb-0">{text}</div>
        <div className="text-white position-absolute card-badges card-badges-left">
          <div className="bg-success shadow-sm m-1 p-1 text-center small rounded-circle card-badge" style={{ display: selected ? 'block' : 'none' }}>
            <i className="fa fa-fw fa-check"/>
          </div>
          <div className="bg-danger shadow-sm m-1 p-1 text-center small rounded-circle card-badge hover-card-badges" onClick={onTrash}>
            <i className="fa fa-fw fa-trash"/>
          </div>
        </div>
      </div>
      <div className="card-body py-2" style={{ overflow: 'hidden' }}>
        <div className="card-text small text-justify" />
      </div>
    </div>
  </div>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onTrash: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
