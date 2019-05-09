import React from 'react';

export default ({ card, deleteCard }) => {
  return (
    <div className="card-wrapper float-left m-3">
      <div className="card shadow item">
        <div className="card-header">
          <div className="card-title mb-0">
          <div className="row mx-0">
              <div className="mr-auto">{card.name}</div>
              <div
                className="hover-card-badges"
                style={{ display: /*editable*/ true ? 'inline' : 'none' }}
              >
                <i className="fa fa-fw fa-pencil text-muted" title="edit" />
                <i
                  className="fa fa-fw fa-trash text-muted"
                  title="delete"
                  onClick={() => deleteCard(card.id)}
                />
              </div>
            </div>
          </div>
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
