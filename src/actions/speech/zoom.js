let zoom = 100;

function zoomIn() {
  zoom = Math.round(zoom * 1.25);
  document.body.style.zoom = `${zoom}%`;
}

function zoomOut() {
  zoom = Math.round(zoom * 0.75);
  document.body.style.zoom = `${zoom}%`;
}

function zoom100() {
  zoom = 100;
  document.body.style.zoom = `${zoom}%`;
}

export const zoomHandlers = {
  in: {
    commands: ['збільшити', 'більше', 'zoom', 'zoom zoom', 'zoom in', 'bigger'],
    fn: zoomIn,
  },
  out: {
    commands: ['zoom out', 'зменшити', 'менше', 'smaller'],
    fn: zoomOut,
  },
  reset: {
    commands: [
      'zoom reset',
      'reset zoom',
      'normal zoom',
      'original',
      'оригінал',
    ],
    fn: zoom100,
  },
};
