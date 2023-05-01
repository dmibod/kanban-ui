export const consoleHandlers = {
  clear: {
    commands: ['clear', 'очистити', 'почистити', 'стерти'],
    fn: clearConsole,
  },
};

function clearConsole() {
  console.clear();
}