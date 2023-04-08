import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Desc from './Desc';
import Spinner4 from '../Spinner4';
import ProgressBar from '../ProgressBar';

const Item = ({ id, name, description, state, shared, editable, shareBoard, deleteBoard }) => (
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
          <Desc key={id} {...{id, description}}></Desc>
        </div>
        <Spinner4 id={`spinner-${id}`} key={id} {...{visible: state === 'loading' }}/>
      </div>
      <div style={{ display: (state || '').startsWith('progress') ? 'block' : 'none', position: 'absolute', bottom: 0, left: 0, width: '100%' }}>
        <ProgressBar bgcolor={"#17a2b8"} completed={(state||'').split(':')[1] || 100}/>
      </div>
    </div>
  </div>
);

Item.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Item;
