import React from 'react';
import CardLane from './CardLane';
import CompositeLane from './CompositeLane';

export default ({ lane, board, editable }) => {
  return lane.type === 'C' ? (
    <CardLane key={lane.id} lane={lane} board={board} editable={editable}/>
  ) : (
    <CompositeLane key={lane.id} lane={lane} board={board} editable={editable}/>
  );
};
