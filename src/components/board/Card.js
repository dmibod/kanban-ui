import React from 'react';

export default ({ name }) => {
  return (
    <div className="card-wrapper float-left m-3">
      <div className="card shadow item">
        <div className="card-header">
          <div className="card-title mb-0">{name}</div>
        </div>
        <div className="card-body py-2" style={{ overflow: 'hidden' }}>
          <div className="card-body-wrapper">
            <div className="card-text small text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur odio fuga perspiciatis nesciunt rem quasi vero deleniti
              sed beatae ex laborum dignissimos ipsam doloremque, expedita, quae
              eum voluptates! Ut, necessitatibus!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
