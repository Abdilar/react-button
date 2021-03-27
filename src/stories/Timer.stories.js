import React, {useState} from 'react';
import Button from '../';

export default {
  title: 'Timer Prop',
  component: Button
}

export const time = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <div className="wrapper">
        <Button time={100} activeTimer={active}>Contained</Button>
        <Button time={100} activeTimer={active} variant="outlined">Outlined</Button>
        <Button time={100} activeTimer={active} variant="text">Text</Button>
      </div>
      <div className="wrapper">
        <button onClick={() => setActive(!active)}>{active ? 'Off' : 'On'}</button>
      </div>
    </div>
  )
};

export const timeFormat = () => (
  <Button time={100} activeTimer={true} timeFormat="MMm SSs">Time Format</Button>
);

export const timeClasses = () => {
  const customClass = {
    wrapperClass: "color-black",
    symbolClass: "color-white",
    digitClass: "color-yellow",
    hourClass: "color-red",
    minuteClass: "color-blue",
    secondClass: "color-orange",
    hourWrapperClass: "color-green",
    minuteWrapperClass: "color-green",
    secondWrapperClass: "color-green",
  };

  return (
    <Button time={1000} activeTimer={true} timeClasses={customClass}>UIkit</Button>
  );
};
