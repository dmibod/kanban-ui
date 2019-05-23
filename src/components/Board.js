import React from 'react';
import { connect } from 'react-redux';
import Header from './board/Header';
import Body from './board/Body';
import socket from '../apis/socket';
import { Modal, Button } from 'react-bootstrap';
import { fetchBoard } from '../actions/board';

class Board extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      title: 'Confirm',
      question: 'Are you sure?',
      yesFn: this.handleClose
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const { fetchBoard } = this.props;

    fetchBoard(id);

    socket(JSON.stringify({ id }));
  }

  componentWillUnmount() {
    socket(JSON.stringify({ id: '' }));
  }

  handleClose(fn) {
    if (fn && typeof fn == 'function') {
       fn();
    }
    this.setState({ show: false });
  }

  handleShow(title = 'Confirm', question = 'Are you sure?', fn) {
    this.setState({ show: true, title, question, yesFn: () => this.handleClose(fn) });
  }

  render() {
    const { board, editable } = this.props;

    if (!board) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Header board={board} editable={editable} />
        <Body board={board} editable={editable} onConfirm={this.handleShow} />
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.state.question}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.state.yesFn}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>        
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let board = state.boards[ownProps.match.params.id];
  let editable = state.auth.isSignedIn && board && board.owner === state.auth.userProfile.id

  return { board, editable };
};

export default connect(
  mapStateToProps,
  { fetchBoard }
)(Board);
