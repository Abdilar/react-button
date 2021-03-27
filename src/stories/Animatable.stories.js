import React from 'react';
import Button from '../';

export default {
  title: 'Animatable Prop',
  component: Button
}

export const pulseAnimate = () => (
  <Button animatable={true}>Animatable</Button>
);
