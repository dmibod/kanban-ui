import React from 'react';

export default ({id, text, style}) => {
  text = text || "";
  style = style || {};
  return (
    <div className="value" style={style}>{text}</div>
  ); 
};
