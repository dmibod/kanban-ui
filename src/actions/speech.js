import { SPEECH_ON, SPEECH_OFF, SPEECH_CMD, SPEECH_LANG } from './types';
import { startSpeech, stopSpeech, speechLanguage } from '../apis/speech';
import { getHandler } from './speech/handlers';

export const speechOn = () => {
  startSpeech();
  return {
    type: SPEECH_ON,
  };
};

export const speechOff = () => {
  stopSpeech();
  return {
    type: SPEECH_OFF,
  };
};

export const speechCmd = (cmd, props, helpShow, helpClose) => {
  cmd = cmd.toLowerCase();
  var handler = getHandler(cmd, props);
  if (handler) {
    console.log('found: ' + cmd);
    handler.fn(cmd, props, helpShow, helpClose);
  } else {
    console.log('not found: ' + cmd);
  }
  return {
    type: SPEECH_CMD,
    payload: {
      cmd: cmd,
      executed: handler != null
    }
  };
};

export const speechLang = (lang) => {
  speechLanguage(lang);
  return {
    type: SPEECH_LANG,
    payload: lang,
  };
};
