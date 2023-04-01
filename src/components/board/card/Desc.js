import React from 'react';
import Prop from './Prop';

export default ({id, description}) => {
 let body = description || '';
 if (IsJsArray(body)){
   const arr = ParseJsArray(body);
   body = arr.map((i, idx) => (<Prop key={`${id}_${idx}`} {...{id:`${id}_${idx}`, _key:i.key, value:i.value}}/>));
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

