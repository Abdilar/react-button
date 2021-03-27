import React, {useRef, useState} from 'react';
import Button from '../';

export default {
  title: 'Type Prop',
  component: Button
}

export const button = () => (
  <Button type="button">Button Type</Button>
);

export const submit = () => {
  const handleSubmitForm = (e) => {
    e.preventDefault();
    alert('submitted form!');
  };

  return (
    <form className="wrapper" onSubmit={handleSubmitForm}>
      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" />
      </div>
      <Button type="submit">Submit Type</Button>
    </form>
  )
};

export const reset = () => (
  <form className="wrapper" onSubmit={(e) => e.preventDefault()}>
    <div className="form-field">
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text"/>
    </div>
    <Button type="reset">Reset Type</Button>
  </form>
);
