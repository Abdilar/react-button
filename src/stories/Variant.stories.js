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
      <Button isLoading={isLoading} time={10} timeFormat="HHh MMm SSs" activeTimer={time} onCompleteTime={() => console.log('TIME completed!')} onClick={() => console.log('Button clicked!')}>Saeed</Button>
      &nbsp;
      &nbsp;
      &nbsp;
      <Button isLoading={isLoading} time={10} timeFormat="HHh MMm SSs" activeTimer={time} href="http://google.com" onCompleteTime={() => console.log('TIME completed!')} onClick={() => console.log('Button clicked!')}>Link</Button>
    </div>
    <button onClick={() => setIsLoading(!isLoading)}>spinner</button>
    <button onClick={() => setTime(!time)}>timer</button>
  </div>
  );
};
