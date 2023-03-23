import React from 'react';
import Prop from './Prop';

export default ({id, description}) => {
 var text = description || '';
 let body = text;
 if (IsJsArray(text)){
   const arr = ParseJsArray(text);
   body = arr.map((i, idx) => (<Prop key={`${id}_${idx}`} {...{id:`${id}_${idx}`, _key:i.key, value:i.value}}/>));
 } else if (text.includes(':')){
  body = text 
  .split(";").filter(s => s != null && s.length > 0)
  .map(s => s.split(':'))
  .map((p, idx) => (<div key={`${id}_${idx}`} className="desc-container"><div className="label">{p[0]}:</div><div className="value">{p[1]}</div></div>));
 }
  return <div className="card-text small text-justify">{body}</div>
};

function IsJsArray(text){
  text = text || "";
  return text.length > 1 && text.startsWith("[") && text.endsWith("]");
}

function ParseJsArray(text){
  try {
    return eval(text);
  } catch (error) {
    return [];
  }
}

