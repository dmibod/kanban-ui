import React from 'react';
import Body from './card/Body';

export default ({ board, lane, card, deleteCard, editable }) => {
  return (
    <div
      id={card.id}
      className="card-wrapper float-left m-3"
      draggable={editable ? 'true' : 'false'}
      onDragStart={e => {
        //e.dataTransfer.setData('id', e.target.id);
        //e.dataTransfer.setData('card', e.target.id);
        e.dataTransfer.setData('card', card.id);
        e.dataTransfer.setData('parent', lane.id);
      }}
    >
      <div className="card shadow item">
        <div className="card-header">
          <div className="card-title mb-0">
            <div className="row mx-0">
              <div className="mr-auto">{card.name}</div>
              <div
                className="hover-card-badges"
                style={{ display: editable ? 'inline' : 'none' }}
              >
                <i className="fa fa-fw fa-pencil text-muted card-badge" title="edit" />
                <i
                  className="fa fa-fw fa-trash text-muted card-badge"
                  title="edit"
                  onClick={() => deleteCard(card.id)}
                />
              </div>
            </div>
          </div>
        </div>
        <Body card={card} />
      </div>
    </div>
  );
};
