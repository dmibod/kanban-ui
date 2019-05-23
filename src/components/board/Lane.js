import React from 'react';
import CardLane from './CardLane';
import CompositeLane from './CompositeLane';

export default ({ lane, board, parentId, editable, onConfirm }) => {
  return lane.type === 'C' ? (
    <CardLane key={lane.id} lane={lane} board={board} parentId={parentId} editable={editable} onConfirm={onConfirm}/>
  ) : (
    <CompositeLane key={lane.id} lane={lane} board={board} parentId={parentId} editable={editable} onConfirm={onConfirm}/>
  );
};
