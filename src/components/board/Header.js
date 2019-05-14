import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { renameBoard, layoutBoard, createLane } from '../../actions';

const Header = ({ editable, update, layout, lane, board }) => {
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
          }}
        >
          <i className="fa fa-fw fa-check" />
        </button>
      </div>
    );
  };

  const layoutButton = () => {
    if (!editable) {
      return null;
    }

    const layoutIcon = board.layout === 'V' ? 'fa-table' : 'fa-columns';

    return (
      <button
        className="btn btn-sm text-white"
        onClick={e => {
          layout(board.id, board.layout === 'V' ? 'H' : 'V');
        }}
      >
        <i className={`fa fa-fw ${layoutIcon}`} />
      </button>
    );
  };

  const laneButton = () => {
    if (!editable) {
      return null;
    }

    return (
      <button
        className="btn btn-sm text-white"
        onClick={e => {
          lane('Lane', board.id);
        }}
      >
        <i className="fa fa-fw fa-file" />
      </button>
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
                <Link to={`${process.env.REACT_APP_CONTEXT_ROOT}/`} className="btn btn-success btn-sm">
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
          {laneButton()}
          <button className="btn btn-sm text-white">
            <i className="fa fa-fw fa-filter" />
          </button>
          {layoutButton()}
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

export default connect(
  mapStateToProps,
  { update: renameBoard, layout: layoutBoard, lane: createLane }
)(Header);
