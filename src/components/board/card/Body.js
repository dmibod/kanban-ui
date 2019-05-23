import React from 'react';

export default card => {
  return (
    <div className="card-body py-2" style={{ overflow: 'hidden' }}>
      <div className="card-body-wrapper">
        <div className="card-text small text-justify">{card.description}</div>
      </div>
    </div>
  );
};
