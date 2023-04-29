import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { filterBoards, createBoard, deleteBoard, shareBoard, renameBoard } from '../actions/board';
import { speechOn, speechOff, speechCmd, speechLang } from '../actions/speech';

class Speech extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      title: '',
      info: ''
    };
  }

  onSpeechOnClick = () => {
    this.props.speechOn(cmd => this.props.speechCmd(cmd, this.props, (t, i) => !this.state.show && this.handleShow(t, i), () => this.state.show && this.handleClose()));
  };

  onSpeechOffClick = () => {
    this.props.speechOff();
  };

  handleClose() {
    this.setState({ show: false });
  }

  handleShow(title = '', info = '') {
    this.setState({ show: true, title: title, info: info });
  }

  render() {
    if (!this.props.isEnabled) {
      return null;
    }
    if (this.props.isOn) {
      return (
        <React.Fragment>
        <div className="input-group-append">
          <button
            className={
              this.props.greenBg
                ? 'btn btn-sm btn-success'
                : 'btn btn-info btn-sm'
            }
            onClick={this.onSpeechOffClick}
            title={`${this.props.lang}:${this.props.cmd}`}
          >
            <i className="fa fa-fw fa-microphone-slash" />
          </button>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.state.info}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
        <div className="input-group-append">
          <button
            className={
              this.props.greenBg
                ? 'btn btn-sm btn-success'
                : 'btn btn-info btn-sm'
            }
            onClick={this.onSpeechOnClick}
          >
            <i className="fa fa-fw fa-microphone" />
          </button>
        </div>
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
}

const mapStateToProps = (state) => {
  return {
    isEnabled: state.speech.isSpeechEnabled,
    isOn: state.speech.isSpeechOn,
    cmd: state.speech.speechCmd,
    lang: state.speech.speechLang,
    filter: state.filter,
    boards: state.boards,
    owner: state.auth.user
  };
};

export default connect(mapStateToProps, {
  speechOn,
  speechOff,
  speechCmd,
  speechLang,
  filterBoards,
  createBoard,
  deleteBoard,
  shareBoard,
  renameBoard
})(Speech);
