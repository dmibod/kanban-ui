import React from 'react';
import CardLane from './CardLane';
import CompositeLane from './CompositeLane';

export default ({ lane, board }) => {
  return lane.type === 'C' ? (
    <CardLane key={lane.id} lane={lane} board={board}/>
  ) : (
    <CompositeLane key={lane.id} lane={lane} board={board}/>
  );
};
