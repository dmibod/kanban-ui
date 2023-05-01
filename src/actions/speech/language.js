function languageUa(cmd, props) {
  props.speechLang('uk-UA', (cmd) => props.speechCmd(cmd, props));
}

function languageUs(cmd, props) {
  props.speechLang('en-US', (cmd) => props.speechCmd(cmd, props));
}

export const languageHandlers = {
  english: {
    commands: ['англійська', 'english'],
    fn: languageUs,
  },

  ukrainian: {
    commands: ['ukrainian'],
    fn: languageUa,
  },
};
