import React from 'react';
import Key from './Key';
import Value from './Value';

export default ({id, _key, value}) => {
  _key = _key || {};
  _key.id = `${id}_key`;
  value = value || {};
  value.id = `${id}_value`;
  return (
    <div className="desc-container">
      <Key {...{id: `${_key.id}_body`, text: _key.text, style: _key.style}}/>
      <Value {...{id: `${value.id}_body`, text: value.text, style: value.style}}/>
    </div>
  );
};


