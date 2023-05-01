function mute(cmd, props) {
  props.speechOff();
}

function reloadPage(cmd, props) {
  window.location.reload();
}

export const controlHandlers = {
  mute: {
    commands: ['mute', 'виключити'],
    fn: mute,
  },
  reload: {
    commands: ['reload', 'оновити'],
    fn: reloadPage,
  },
};
