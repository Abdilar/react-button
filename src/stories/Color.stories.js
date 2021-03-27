import React from 'react';
import Button from '../';

export default {
  title: 'Color Prop',
  component: Button
}

export const colors = () => (
  <div>
    <div className="wrapper">
      <Button color="default">Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="danger">Danger</Button>
    </div>
    <div className="wrapper">
      <Button variant="outlined" color="default">Default</Button>
      <Button variant="outlined" color="primary">Primary</Button>
      <Button variant="outlined" color="secondary">Secondary</Button>
      <Button variant="outlined" color="success">Success</Button>
      <Button variant="outlined" color="warning">Warning</Button>
      <Button variant="outlined" color="danger">Danger</Button>
    </div>
    <div className="wrapper">
      <Button variant="text" color="default">Default</Button>
      <Button variant="text" color="primary">Primary</Button>
      <Button variant="text" color="secondary">Secondary</Button>
      <Button variant="text" color="success">Success</Button>
      <Button variant="text" color="warning">Warning</Button>
      <Button variant="text" color="danger">Danger</Button>
    </div>
  </div>
);
