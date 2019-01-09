import React from 'react';
import Card from './Card';

export default ({ name }) => {
  return (
    <div className="lane-wrapper">
      <div className="lane-header card-header border rounded-0">
        <div className="card-title mb-0">{name}</div>
      </div>
      <div className="lane-body">
        <Card name="Card#1" />
        <Card name="Card#2" />
        <Card name="Card#3" />
        <Card name="Card#4" />
        <Card name="Card#5" />
        <Card name="Card#6" />
      </div>
    </div>
  );
};
