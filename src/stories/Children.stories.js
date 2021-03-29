import React, {useState} from 'react';
import Button from '../';

export default {
  title: 'Children Prop',
  component: Button
}

export const children = () => (
  <Button>
    <span>Submit</span>
    <span style={{marginLeft: '10px'}}>&#10003;</span>
  </Button>
);
