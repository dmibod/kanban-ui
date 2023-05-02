import React from 'react';
import { connect } from 'react-redux';
import { speechOn, speechOff } from '../actions/speech';

class Microphone extends React.Component {
  onSpeechOnClick = () => {
    this.props.speechOn();
  };

  onSpeechOffClick = () => {
    this.props.speechOff();
  };

  getButtonStyle = () => {
    let style = this.props.home ? 'btn-info' : 'btn-success';

    if (this.props.isEnabled && this.props.isOn){
      if (this.props.isError){
        style ='btn-danger';
      } else if (!this.props.executed){
        style ='btn-warning';
      }
    }

    return 'btn btn-sm ' + style;
  };

  render() {
      return (
        <div className="input-group-append">
          <button
            disabled={!this.props.isEnabled}
            className={this.getButtonStyle()}
            onClick={() => this.props.isOn ? this.onSpeechOffClick() : this.onSpeechOnClick()}
            title={`${this.props.lang}:${this.props.cmd}`}
          >
            <i className={this.props.isOn ? 'fa fa-fw fa-microphone-slash' : 'fa fa-fw fa-microphone'} />
          </button>
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    isEnabled: state.speech.isSpeechEnabled,
    isOn: state.speech.isSpeechOn,
    isError: state.speech.isSpeechError,
    cmd: state.speech.speechCmd,
    executed: state.speech.speechResult,
    lang: state.speech.speechLang
  };
};

export default connect(mapStateToProps, {
  speechOn,
  speechOff
})(Microphone);
