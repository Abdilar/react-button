import React from 'react';
import Button from '../';

export default {
  title: 'Size Prop',
  component: Button
}

export const sizes = () => (
  <div className="wrapper">
    <Button size="small">Small</Button>
    <Button size="medium">Medium</Button>
    <Button size="large">Large</Button>
    <Button size="xlarge">X-Large</Button>
  </div>
);
