import React, {useState} from 'react';
import Button from '../';
import {number, text, boolean, radios} from '@storybook/addon-knobs';

export default {
  title: 'Editable Example',
  component: Button
}

export const example = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [time, setTime] = useState(false);

  return (
  <div>
    <div className="grid">
      <Button isLoading={isLoading} time={10} activeTimer={time}>Saeed</Button>
    </div>
    <button onClick={() => setIsLoading(!isLoading)}>spinner</button>
    <button onClick={() => setTime(!time)}>timer</button>
  </div>
  );
};
