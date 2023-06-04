import React, { useState } from 'react';
import Body from './card/Body';
import Form from './card/Form';

export default ({ lane, card, editCard, deleteCard, editable, children }) => {
  const [formVisibility, setFormVisibility] = useState(false);
  const [fullVisibility, setFullVisibility] = useState(false);

  const fn = () => {
    console.log('setting form visible');
    setFormVisibility(true);
  }

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
      <div 
      className="card shadow item"
      style={{ height: fullVisibility ? 'auto' : undefined }}
      >
        <div className="card-header p-2">
          <div className="card-title mb-0">
            <div className="row mx-0">
              <div className="mr-auto">{card.name}</div>
              <div
                className="hover-card-badges"
              >
                <i
                  className="fa fa-fw fa-pencil text-muted card-badge"
                  title="edit"
                  style={{ display: editable ? 'inline' : 'none' }}
                  onClick={() => fn()}
                />
                <i
                  className="fa fa-fw fa-trash text-muted card-badge"
                  title="delete"
                  style={{ display: editable ? 'inline' : 'none' }}
                  onClick={() => deleteCard(card.id)}
                />
                <i
                  className="fa fa-fw fa-eye text-muted card-badge"
                  title="all"
                  style={{ display: !fullVisibility ? 'inline' : 'none' }}
                  onClick={() => setFullVisibility(!fullVisibility)}
                />
                <i
                  className="fa fa-fw fa-eye-slash text-muted card-badge"
                  title="scroll"
                  style={{ display: fullVisibility ? 'inline' : 'none' }}
                  onClick={() => setFullVisibility(!fullVisibility)}
                />
              </div>
            </div>
          </div>
        </div>
        <Body card={card} fullVisibility={fullVisibility} />
        {/*<Form visible={formVisibility} initialValues={card}></Form>*/}
      </div>
    </div>
  );
};
