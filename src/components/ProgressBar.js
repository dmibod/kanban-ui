import React from 'react';

export default (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 5,
    width: '100%',
    backgroundColor: "transparent",
    borderRadius: '0.2rem',
    padding: 0,
    margin: 0
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 1s ease-in-out',
    padding: 0,
    margin: 0
  }

  const labelStyles = {
    display: 'none',
    padding: 0,
    margin: 0,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 'xx-small'
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};
