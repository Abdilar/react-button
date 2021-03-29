import React from 'react';
import Button from '../';

export default {
  title: 'Disabled Prop',
  component: Button
}

export const disabled = () => (
  <div className="wrapper">
    <Button disabled={true}>Contained</Button>
    <Button variant="outlined" disabled={true}>Outlined</Button>
    <Button variant="text" disabled={true}>Text</Button>
  </div>
);
