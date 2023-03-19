import React from 'react';

export default ({id, description}) => {
  var text = description || '';
  if (!text.includes(':')){
    return text;
  }
  var body = text 
  .split(";").filter(s => s != null && s.length > 0)
  .map(s => s.split(':'))
  .map((p, idx) => (<div key={`${id}_${idx}`} className="desc-container"><b className="label">{p[0]}:</b><i className="value">{p[1]}</i></div>));

  return <div className="card-text small text-justify">{body}</div>
};
