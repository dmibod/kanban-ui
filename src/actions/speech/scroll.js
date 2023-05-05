import _ from 'lodash';
import { isActiveBoard } from './common';

export const scrollHandlers = {
  top: {
    commands: [
      'вгору',
      'вверх',
      'scroll top',
      'scroll up',
      'scroll start',
      'go up',
    ],
    fn: scrollTop,
  },
  bottom: {
    commands: ['вниз', 'scroll bottom', 'scroll down', 'scroll end', 'go down'],
    fn: scrollBottom,
  },
  up: {
    commands: ['up', 'north', 'вище', 'північ'],
    fn: scrollUp,
  },
  down: {
    commands: ['down', 'south', 'нижче', 'південь'],
    fn: scrollDown,
  },
  left: {
    commands: ['left', 'west', 'ліво', 'лівіше', 'захід'],
    fn: scrollLeft,
  },
  right: {
    commands: ['right', 'east', 'право', 'правіше', 'схід'],
    fn: scrollRight,
  },
  to: {
    commands: ['to', 'element', 'show', 'покажи', 'елемент'],
    enabled: isActiveBoard,
    fn: scrollTo,
  },
};

function scrollTo(cmd, props) {
  var ticker = cmd.split(' ')[1];
  if (!ticker) {
    return;
  }
  ticker = ticker.toLowerCase() + ":";
  var elements = document.querySelectorAll("div.lane-title > div.row > div.mr-auto b");
  var pairs = _.map(elements, el => [el.innerText.toLowerCase(), el]);
  var map = _.fromPairs(pairs);
  if (map[ticker]){
    map[ticker].scrollIntoView();
  }
}

function scrollLeft() {
  window.scrollBy(-300, 0);
}

function scrollRight() {
  window.scrollBy(300, 0);
}

function scrollUp() {
  window.scrollBy(0, -300);
}

function scrollDown() {
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
