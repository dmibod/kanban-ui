import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import history from '../history';
import { filterBoards } from '../actions/board';
import { speechOn, speechOff, speechCmd, speechLang } from '../actions/speech';

class Speech extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      title: 'Voice commands',
      question: 'go home, mute, zoom in/out/double, scroll top/bottom, filter, drop filter, first, last, open, help, show help, close help, close'
    };
  }
  componentDidUpdate() {
    var cmd = this.props.cmd.toLowerCase();
    console.log('componentDidUpdate: ' + cmd);
    if (!this.props.isOn) {
      console.log('componentDidUpdate: speech is off');
      return;
    }
    if (cmd.startsWith('clear') || cmd.startsWith('прибери')) {
      console.clear();
    } else if (cmd.startsWith('go home') || cmd.startsWith('додому')) {
      history.push(`${process.env.REACT_APP_CONTEXT_ROOT}/`);
    } else if (cmd.startsWith('mute') || cmd.startsWith('виключити')) {
      this.props.speechOff();
    } else if (cmd.startsWith('language') && this.props.lang === 'en-US') {
      this.props.speechLang('ua-UA', this.props.speechCmd);
    } else if (cmd.startsWith('мова') && this.props.lang === 'ua-UA') {
      this.props.speechLang('en-US', this.props.speechCmd);
    } else if (cmd.startsWith('zoom double') || cmd.startsWith('double zoom')) {
      document.body.style.zoom = '200%';
    } else if (cmd.startsWith('zoom in')) {
      document.body.style.zoom = '150%';
    } else if (cmd.startsWith('zoom out')) {
      document.body.style.zoom = '100%';
    } else if (cmd.startsWith('scroll top')) {
      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    } else if (cmd.startsWith('scroll bottom')) {
      window.scrollTo({
        left: 0,
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    } else if (cmd.startsWith('filter')) {
      var filter = cmd.split(' ')[1];
      if (!filter) {
        return;
      }
      filter = filter.toLowerCase();
      this.props.filterBoards(filter);
    } else if (cmd.startsWith('drop filter')) {
      this.props.filterBoards('');
    } else if (cmd.startsWith('first')) {
      var ticker = cmd.split(' ')[1];
      if (!ticker) {
        return;
      }
      ticker = ticker.toLowerCase();
      var key = _.findKey(
        this.props.boards,
        (val) =>
          val.name.toLowerCase().includes(ticker) ||
          val.description.toLowerCase().includes(ticker)
      );
      if (key) {
        history.push(`${process.env.REACT_APP_CONTEXT_ROOT}/board/${key}`);
      }
    } else if (cmd.startsWith('last')) {
      var ticker = cmd.split(' ')[1];
      if (!ticker) {
        return;
      }
      ticker = ticker.toLowerCase();
      var key = _.findLastKey(
        this.props.boards,
        (val) =>
          val.name.toLowerCase().includes(ticker) ||
          val.description.toLowerCase().includes(ticker)
      );
      if (key) {
        history.push(`${process.env.REACT_APP_CONTEXT_ROOT}/board/${key}`);
      }
    } else if (cmd.startsWith('open')) {
      var ticker = cmd.split(' ')[1];
      if (!ticker) {
        return;
      }
      ticker = ticker.toLowerCase();
      var key = _.findKey(this.props.boards, (val) =>
        val.description.toLowerCase().includes(ticker)
      );
      if (key) {
        history.push(`${process.env.REACT_APP_CONTEXT_ROOT}/board/${key}`);
      }
    } else if ((cmd.startsWith('help') || cmd.startsWith('show help')) && !this.state.show){
      this.handleShow();
    } else if ((cmd.startsWith('close help') || cmd.startsWith('close')) && this.state.show){
      this.handleClose();
    }
  }

  onSpeechOnClick = () => {
    this.props.speechOn(this.props.speechCmd);
  };

  onSpeechOffClick = () => {
    this.props.speechOff();
  };

  handleClose(fn) {
    if (fn && typeof fn == 'function') {
      fn();
    }
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
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
          <Modal.Body>{this.state.question}</Modal.Body>
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
    boards: state.boards,
  };
};

export default connect(mapStateToProps, {
  speechOn,
  speechOff,
  speechCmd,
  speechLang,
  filterBoards
})(Speech);
