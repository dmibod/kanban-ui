import React from 'react';
import Desc from './Desc';

export default ({card}) => {
  return (
    <div className="card-body py-2" style={{ overflowY: 'auto' }}>
      <div className="card-body-wrapper">
        <Desc key={card.id} {...{id: card.id, description: card.description}}></Desc>
      </div>
    </div>
  );
};
