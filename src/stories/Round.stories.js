import React from 'react';
import Button from '../';

export default {
  title: 'Round Prop',
  component: Button
}

export const rounds = () => (
  <div className="wrapper">
    <Button round="empty">Empty</Button>
    <Button round="low">Low</Button>
    <Button round="more">More</Button>
    <Button round="fully">Fully</Button>
  </div>
);
