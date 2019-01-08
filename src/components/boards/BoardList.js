import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBoards } from '../../actions';

class BoardList extends React.Component {
  componentDidMount() {
    this.props.fetchBoards();
  }

  renderButtons(board) {
    if (board.userId === this.props.currentUserId) {
      return <div></div>;
    }
  }

  renderList() {
    return this.props.boards.map(board => {
      return (
        <div className="item" key={board.id}>
          {this.renderButtons(board)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/streams/${board.id}`} className="header">
              {board.title}
            </Link>
            <div className="description">{board.description}</div>
          </div>
        </div>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    boards: Object.values(state.boards),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchBoards }
)(BoardList);