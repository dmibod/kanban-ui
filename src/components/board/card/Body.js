import React from 'react';
import Desc from './Desc';

export default ({card}) => {
  return (
    <div className="card-body p-2">
      <div className="card-body-wrapper">
        <Desc key={card.id} {...{id: card.id, description: card.description}}></Desc>
      </div>
    </div>
  );
};
