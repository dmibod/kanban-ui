import {
  SPEECH_ON,
  SPEECH_OFF,
  SPEECH_ERROR,
  SPEECH_CMD,
  SPEECH_LANG,
} from '../actions/types';
import { isSpeechEnabled } from '../apis/speech';

const INTIAL_STATE = {
  isSpeechEnabled: isSpeechEnabled(),
  isSpeechOn: false,
  isSpeechError: false,
  speechLang: localStorage.getItem('speech.lang') || 'en-US',
  speechCmd: '',
  speechResult: true,
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SPEECH_ON:
      return {
        ...state,
        isSpeechOn: true && state.isSpeechEnabled,
        speechCmd: '',
      };
    case SPEECH_OFF:
      return {
        ...state,
        isSpeechOn: false,
        isSpeechError: false,
        speechCmd: '',
      };
    case SPEECH_ERROR:
      return { ...state, isSpeechError: true };
    case SPEECH_CMD:
      return {
        ...state,
        isSpeechError: false,
        speechCmd: action.payload.cmd,
        speechResult: action.payload.executed,
      };
    case SPEECH_LANG:
      return { ...state, speechLang: action.payload };
    default:
      return state;
  }
};
