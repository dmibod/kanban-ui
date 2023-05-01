export const scrollHandlers = {
  top: {
    commands: [
      'вгору',
      'вверх',
      'scroll top',
      'scroll up',
      'scroll start',
      'go up'
    ],
    fn: scrollTop,
  },
  bottom: {
    commands: ['вниз', 'scroll bottom', 'scroll down', 'scroll end', 'go down'],
    fn: scrollBottom,
  },
  up: {
    commands: ['up', 'north', 'вище', 'північ'],
    fn: scrollUp
  },
  down: {
    commands: ['down', 'south', 'нижче', 'південь'],
    fn: scrollDown
  },
  left: {
    commands: ['left', 'west', 'ліво', 'лівіше', 'захід'],
    fn: scrollLeft
  },
  right: {
    commands: ['right', 'east', 'право', 'правіше', 'схід'],
    fn: scrollRight
  }
};

function scrollLeft(){
  window.scrollBy(-300, 0);
}

function scrollRight(){
  window.scrollBy(300, 0);
}

function scrollUp(){
  window.scrollBy(0, -300);
}

function scrollDown(){
  window.scrollBy(0, 300);
}

function scrollTop() {
  window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
}

function scrollBottom() {
  window.scrollTo({
    left: 0,
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
}
