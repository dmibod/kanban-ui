import React from 'react';

export default ({id, description}) => {
  var text = description || '';
  if (!text.includes(':')){
    return text;
  }
  var body = text 
  .split(";").filter(s => s != null && s.length > 0)
  .map(s => s.split(':'))
  .map((p, idx) => (<div key={`${id}_${idx}`} className="desc-container"><div className="label">{p[0]}:</div><div className="value">{p[1]}</div></div>));

  return <div className="card-text small text-justify">{body}</div>
};
