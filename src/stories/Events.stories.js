import React, {useState} from 'react';
import Button from '../';

export default {
  title: 'Events',
  component: Button
}

export const onClick = () => (
  <Button onClick={() => alert('On Click Button!')}>Button</Button>
);

export const onCompleteTime = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="wrapper">
      <Button time={10} activeTimer={active} onCompleteTime={() => {alert('Completed!'); setActive(false)}}>On Complete</Button>
      <button onClick={() => setActive(!active)}>{active ? 'Off' : 'On'}</button>
    </div>
  )
};
