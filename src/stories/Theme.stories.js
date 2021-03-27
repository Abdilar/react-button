import React from 'react';
import Button from '../';

export default {
  title: 'Theme Prop',
  component: Button
}

export const className = () => {
  const customClass = {
    button: 'color-lighten-red-style',
    content: 'color-dark-red'
  };

  return (
    <Button className={customClass}>Button</Button>
  );
}
