import React from 'react';

export default ({id, text, style}) => {
  text = text || "";
  if (text.length > 0) text += ":";
  style = style || {};
  return (
    <div className="label" style={style}>{text}</div>
  ); 
};
