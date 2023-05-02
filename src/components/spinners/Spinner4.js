import React from 'react';

export default ({visible}) => {
  return <div className="lds-hourglass" style={{ display: visible ? 'inline-block' : 'none', position: 'absolute', bottom: 0, right: 0 }}></div>
};
