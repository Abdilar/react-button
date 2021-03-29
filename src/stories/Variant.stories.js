import React from 'react';
import Button from '../';

export default {
  title: 'Variant Prop',
  component: Button
}

export const variants = () => (
  <div className="wrapper">
    <Button variant="contained">Contained</Button>
    <Button variant="outlined">Outlined</Button>
    <Button variant="text">Text</Button>
  </div>
);
