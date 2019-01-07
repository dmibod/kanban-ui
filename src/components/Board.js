import React from 'react';
//import { connect } from 'react-redux';

const Board = ({ match }) => {
  let input;
  //let id = match.params.id;

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
            <input
              type="text"
              className="form-control form-control-sm"
              ref={node => (input = node)}
            />
            <div className="input-group-append">
              <button
                className="btn btn-success btn-sm"
                onClick={e => {
                  //dispatch(renameBoard(input.value.trim()));
                }}
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </nav>
  );
};

//export default connect()(Board);
export default Board;
