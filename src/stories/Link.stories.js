import React from 'react';
import Button from '../';

export default {
  title: 'Link',
  component: Button
}

export const href = () => (
  <div className="wrapper">
    <Button href="https://google.com">Google</Button>
    <Button href="https://facebook.com" variant="outlined">Facebook</Button>
    <Button href="https://apple.com" variant="text">Apple</Button>
  </div>
);

export const target = () => (
  <div className="wrapper">
    <Button href="https://google.com" hrefTarget="_blank">Blank</Button>
    <Button href="https://google.com" hrefTarget="_self">Self</Button>
    <Button href="https://google.com" hrefTarget="_parent">Parent</Button>
    <Button href="https://google.com" hrefTarget="_top">Top</Button>
  </div>
);
