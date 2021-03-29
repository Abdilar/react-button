import React, {useState} from 'react';
import Button from '../';

export default {
  title: 'Spinner Prop',
  component: Button
}

export const isLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <div className="wrapper">
        <Button isLoading={isLoading}>Contained</Button>
        <Button variant="outlined" isLoading={isLoading}>Outlined</Button>
        <Button variant="text" isLoading={isLoading}>Text</Button>
      </div>
      <div className="wrapper">
        <button onClick={() => setIsLoading(!isLoading)}>{isLoading ? 'Off' : 'On'}</button>
      </div>
    </div>
  )
};

export const spinnerName = () => (
  <div className="wrapper">
    <Button isLoading={true} spinnerName="uikit">UIkit</Button>
    <Button isLoading={true} spinnerName="three-dots">Three Dots</Button>
    <Button isLoading={true} spinnerName="tail-spin">Tail Spin</Button>
    <Button isLoading={true} spinnerName="rings">Rings</Button>
    <Button isLoading={true} spinnerName="puff">Puff</Button>
    <Button isLoading={true} spinnerName="oval">Oval</Button>
    <Button isLoading={true} spinnerName="grid">Grid</Button>
    <Button isLoading={true} spinnerName="ball-triangle">Ball Triangle</Button>
  </div>
);

export const spinnerRatio = () => (
  <Button isLoading={true} spinnerRatio={0.7}>UIkit</Button>
);

export const spinnerClasses = () => {
  const customClass = {
    wrapper: 'color-lighten-red',
    spinner: 'color-dark-red'
  };

  return (
    <div className="grid">
      <Button isLoading={true} spinnerClasses={customClass}>UIkit</Button>
    </div>
  );
};
