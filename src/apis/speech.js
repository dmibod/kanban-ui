import _, { find } from 'lodash';

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

var recognition = null;
var counter = 0;
var speechCallbacks = {};
var speechLang = localStorage.getItem('speech.lang') || 'en-US';

function onResult(result) {
  //_.each(speechCallbacks, (cb) => cb && cb(result));
  var cb = _.find(speechCallbacks, cb => cb instanceof Function);
  if (cb) cb(result);
}

function create() {
  var speech = new SpeechRecognition();
  speech.continuous = false;
  speech.lang = speechLang;
  speech.interimResults = false;
  speech.maxAlternatives = 5;
  speech.onspeechend = () => {
    speech.stop();
    start();
  };
  speech.onresult = (event) => {
    onResult(event.results[0][0].transcript);
  };
  speech.onerror = (event) => {
    start();
  };
  return speech;
}

function start() {
  setTimeout(() => {
    if (recognition) {
      recognition.start();
    }
  }, 500);
}

export const isSpeechEnabled = () => {
  return SpeechRecognition !== undefined;
};

export const speechLanguage = (lang) => {
  console.log('Language:' + lang);
  if (speechLang === lang) {
    return;
  }
  localStorage.setItem('speech.lang', lang);
  speechLang = lang;
  var cb = speechCallbacks;
  stopSpeech();
  setTimeout(() => {
    speechCallbacks = cb;
    startSpeech();
  }, 2000);
};

export const startSpeech = () => {
  console.log('Listen');
  recognition = create();
  recognition.start();
};

export const stopSpeech = () => {
  console.log('Stop');
  speechCallbacks = {};
  if (recognition) {
    recognition.stop();
    recognition = null;
  }
};

export const subscribe = (callback) => {
  if (!callback) return -1;
  counter++;
  speechCallbacks[counter] = callback;
  return `cb_${counter}`;
};

export const unsubscribe = (handle) => {
  if (speechCallbacks[handle]) {
    delete speechCallbacks[handle];
  }
};
