import React from 'react';
import CardLane from './CardLane';
import CompositeLane from './CompositeLane';

export default ({ lane }) => {
  return lane.type === 'C' ? (
    <CardLane key={lane.id} lane={lane} />
  ) : (
    <CompositeLane key={lane.id} lane={lane} />
  );
};
