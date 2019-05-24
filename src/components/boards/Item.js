import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Item = ({ id, name, description, shared, editable, shareBoard, deleteBoard }) => (
  <div id={`${id}`} className="card-wrapper float-left m-3">
    <div className="card shadow board">
      <div className="card-header">
        <div className="card-title mb-0">
          <div className="row mx-0">
            <div className="mr-auto">
              <Link
                className="text-info"
                style={{ textDecoration: 'none', fontWeight: '500' }}
                to={`${process.env.REACT_APP_CONTEXT_ROOT}/board/${id}`}
              >
                {name}
              </Link>
            </div>
            <div
              className="hover-card-badges"
              style={{ display: editable ? 'inline' : 'none' }}
            >
              <i className="fa fa-fw fa-pencil text-muted" title="edit" />
              <i
                className="fa fa-fw fa-eye text-muted"
                title="public"
                style={{ display: shared ? 'inline' : 'none' }}
                onClick={() => shareBoard(id, false)}
              />
              <i
                className="fa fa-fw fa-eye-slash text-muted"
                title="private"
                style={{ display: shared ? 'none' : 'inline' }}
                onClick={() => shareBoard(id, true)}
              />
              <i
                className="fa fa-fw fa-trash text-muted"
                title="delete"
                onClick={() => deleteBoard(id, name)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="board-body-wrapper">
          <div className="card-text small text-justify">{description}</div>
        </div>
      </div>
    </div>
  </div>
);

Item.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Item;
