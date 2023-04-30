const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

var recognition = null;
var speechCallback = null;
var speechLang = localStorage.getItem('speech.lang') || "en-US";

function create() {
  var speech = new SpeechRecognition();
  speech.continuous = false;
  speech.lang = speechLang;
  speech.interimResults = false;
  speech.maxAlternatives = 5;
  speech.onspeechend = () => {
    //console.log('Speech end');
    speech.stop();
    start();
  };
  speech.onresult = (event) => {
    //console.log('Speech success');
    //console.log(event);
    if (speechCallback) {
      speechCallback(event.results[0][0].transcript);
    }
  };
  speech.onerror = (event) => {
    //console.log('Speech error');
    //console.log(event);
    start();
  };
  return speech;
}

function start() {
  setTimeout(() => {
    //console.log('Listen');
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
  if (speechLang === lang){
    return;
  }
  localStorage.setItem('speech.lang', lang);
  var cb = speechCallback;
  speechLang = lang;
  stopSpeech();
  setTimeout(() => {
    startSpeech(cb);
  }, 2000);
};

export const startSpeech = (callback) => {
  console.log('Listen');
  speechCallback = callback;
  recognition = create();
  recognition.start();
};

export const stopSpeech = () => {
  console.log('Stop');
  speechCallback = null;
  if (recognition) {
    recognition.stop();
    recognition = null;
  }
};
