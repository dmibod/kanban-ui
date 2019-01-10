import React from 'react';
import Lane from './Lane';

export default ({ board }) => {
  const layout = (board && board.layout) || 'V';
  const style = layout === 'V' ? 'flex-column' : 'flex-row';
  return (
    <div className={`d-flex ${style}`}>
      <Lane name="Composite Lane 1"/>
      <Lane name="Composite Lane 2"/>
    </div>
  );
};
