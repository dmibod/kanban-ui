import React from 'react';

export default ({visible}) => {
  return <div className="lds-ellipsis" style={{ display: visible ? 'inline-block' : 'none' }}><div></div><div></div><div></div><div></div></div>
};
