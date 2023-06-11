import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Body from './card/Body';
import Form from './card/Form';

const Card = ({ lane, card, editCard, deleteCard, editable, children, isExpanded }) => {
  const [formVisibility, setFormVisibility] = useState(false);
  const [fullVisibility, setFullVisibility] = useState(isExpanded);

  useEffect(() => setFullVisibility(isExpanded), [isExpanded]);

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
                  className="fa fa-fw fa-expand text-muted card-badge"
                  title="Expand"
                  style={{ display: !fullVisibility ? 'inline' : 'none' }}
                  onClick={() => setFullVisibility(!fullVisibility)}
                />
                <i
                  className="fa fa-fw fa-compress text-muted card-badge"
                  title="Scroll"
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

const mapStateToProps = (state, ownProps) => {
  return {
    isExpanded: state.expand
  };
};

export default connect(mapStateToProps, {})(Card);

