import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { filterBoards, createBoard, deleteBoard, shareBoard, renameBoard, layoutBoard } from '../actions/board';
import { createLane, createCardLane, layoutLane } from '../actions/lane';
import { speechOn, speechOff, speechCmd, speechLang } from '../actions/speech';
import { subscribe, unsubscribe } from '../apis/speech';

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

  componentDidMount() {
    const showFn = (t, i, y) => !this.state.show && this.handleShow(t, i, y);
    const closeFn = () => this.state.show && this.handleClose();
    this.speechHandle = subscribe(cmd => this.props.speechCmd(cmd, this.props, showFn, closeFn));
    console.log('sub: ' + this.speechHandle);
  }

  componentWillUnmount(){
    console.log('unsub: ' + this.speechHandle);
    unsubscribe(this.speechHandle);
  }

  onSpeechOnClick = () => {
    this.props.speechOn();
  };

  onSpeechOffClick = () => {
    this.props.speechOff();
  };

  handleClose() {
    this.setState({ show: false });
  }

  handleShow(title = '', info = '', yesFn = undefined) {
    this.setState({ show: true, title: title, info: info, yesFn: yesFn });
  }

  render() {
      return (
        <React.Fragment>
        <div className="input-group-append">
          <button
            disabled={!this.props.isEnabled}
            className={
              this.props.greenBg
                ? 'btn btn-sm btn-success'
                : 'btn btn-info btn-sm'
            }
            onClick={() => this.props.isOn ? this.onSpeechOffClick() : this.onSpeechOnClick()}
            title={`${this.props.lang}:${this.props.cmd}`}
          >
            <i className={this.props.isOn ? 'fa fa-fw fa-microphone-slash' : 'fa fa-fw fa-microphone'} />
          </button>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose} size='lg'>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body><div>{this.state.info}</div></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => this.state.yesFn()} disabled={this.state.yesFn===undefined}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
        </React.Fragment>
      );
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
    owner: state.auth.user,
    activeBoardId: state.activeBoard
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
  renameBoard,
  layoutBoard,
  createLane,
  createCardLane,
  layoutLane
})(Speech);
