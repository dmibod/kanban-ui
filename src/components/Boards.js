import React from 'react';
import List from './boards/List';
import { Modal, Button } from 'react-bootstrap';
import socket from '../apis/socket';

class Boards extends React.Component {
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
    socket(JSON.stringify({ id: '' }));
  }

  handleClose(fn) {
    if (fn && typeof fn == 'function') {
      fn();
    }
    this.setState({ show: false });
  }

  handleShow(title = 'Confirm', question = 'Are you sure?', fn) {
    this.setState({
      show: true,
      title,
      question,
      yesFn: () => this.handleClose(fn)
    });
  }

  render() {
    return (
      <React.Fragment>
        <List onConfirm={this.handleShow}/>
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
      </React.Fragment>
    );
  }
}

export default Boards;
