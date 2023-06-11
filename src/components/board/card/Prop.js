import React from 'react';
import Key from './Key';
import Value from './Value';

export default ({id, _key, value}) => {
  _key = _key || {};
  _key.id = `${id}_k`;
  value = value || {};
  value.id = `${id}_v`;
  var values = {};
  if (Array.isArray(value)){
    values = value.map((i, idx) => (<Value key={`${value.id}_${idx}`} {...{id: `${value.id}_${idx}`, text:i.text, style:i.style}}/>));
  } else {
    values = (<Value {...{id: `${value.id}`, text: value.text, style: value.style}}/>);
  }
  return (
    <div className="desc-container">
      <Key {...{id: `${_key.id}`, text: _key.text, style: _key.style}}/>
      {values}
    </div>
  );
};


