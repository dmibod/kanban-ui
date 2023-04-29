import {
  SPEECH_ON,
  SPEECH_OFF,
  SPEECH_CMD,
  SPEECH_LANG
} from './types';
import { startSpeech, stopSpeech, speechLanguage } from '../apis/speech';

export const speechOn = callBack => {
  startSpeech(callBack);
  return {
    type: SPEECH_ON
  };
};

export const speechOff = () => {
  stopSpeech();
  return {
    type: SPEECH_OFF
  };
};

export const speechCmd = cmd => {
  return {
    type: SPEECH_CMD,
    payload: cmd
  };
};

export const speechLang = lang => {
  speechLanguage(lang);
  return {
    type: SPEECH_LANG,
    payload: lang
  };
};
