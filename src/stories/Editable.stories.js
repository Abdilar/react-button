import React from 'react';
import {number, text, boolean, radios} from '@storybook/addon-knobs';
import {NAME as SPINNER} from '@sakit-sa/react-spinner';
import {COLOR, ROUNDED, SIZE, TARGET, TYPE, VARIANT} from "../configs/variables";
import Button from '../';

export default {
  title: 'Editable Example',
  component: Button
}

export const example = () => (
  <Button
    activeTimer={boolean('Activate Timer', false)}
    animatable={boolean('Animatable', false)}
    color={radios('Color', {[COLOR.PRIMARY]: COLOR.PRIMARY, [COLOR.SECONDARY]: COLOR.SECONDARY, [COLOR.SUCCESS]: COLOR.SUCCESS, [COLOR.DANGER]: COLOR.DANGER, [COLOR.WARNING]: COLOR.WARNING,[COLOR.DEFAULT]: COLOR.DEFAULT}, COLOR.PRIMARY)}
    disabled={boolean('Disabled', false)}
    href={text('Href', '')}
    hrefTarget={radios('Href Target', {[TARGET.SELF]: TARGET.SELF, [TARGET.BLANK]: TARGET.BLANK, [TARGET.PARENT]: TARGET.PARENT, [TARGET.TOP]: TARGET.TOP}, TARGET.BLANK)}
    id={text('ID', 'unique-id')}
    isIcon={boolean('Icon', false)}
    isLoading={boolean('Loading', false)}
    round={radios('Round', {[ROUNDED.EMPTY]: ROUNDED.EMPTY, [ROUNDED.LOW]: ROUNDED.LOW, [ROUNDED.MORE]: ROUNDED.MORE, [ROUNDED.FULLY]: ROUNDED.FULLY}, ROUNDED.LOW)}
    size={radios('Size', {[SIZE.SMALL]: SIZE.SMALL, [SIZE.MEDIUM]: SIZE.MEDIUM, [SIZE.LARGE]: SIZE.LARGE, [SIZE.XLARGE]: SIZE.XLARGE}, SIZE.SMALL)}
    spinnerName={radios('Spinner Name', {[SPINNER.UIKIT]: SPINNER.UIKIT, [SPINNER.GRID]: SPINNER.GRID, [SPINNER.THREE_DOTS]: SPINNER.THREE_DOTS, [SPINNER.TAIL_SPIN]: SPINNER.TAIL_SPIN, [SPINNER.RINGS]: SPINNER.RINGS, [SPINNER.PUFF]: SPINNER.PUFF, [SPINNER.OVAL]: SPINNER.OVAL, [SPINNER.BALL_TRIANGLE]: SPINNER.BALL_TRIANGLE}, SPINNER.UIKIT)}
    time={number('Time', 1000)}
    timeFormat={text('Time Format', 'MM:SS')}
    type={radios('Type', {[TYPE.BUTTON]: TYPE.BUTTON, [TYPE.SUBMIT]: TYPE.SUBMIT, [TYPE.RESET]: TYPE.RESET}, TYPE.BUTTON)}
    variant={radios('Variant', {[VARIANT.CONTAINED]: VARIANT.CONTAINED, [VARIANT.OUTLINED]: VARIANT.OUTLINED, [VARIANT.TEXT]: VARIANT.TEXT}, VARIANT.CONTAINED)}
    onCompleteTime={() => console.log('TIME completed!')}
    onClick={() => ('Button clicked!')}
  >
    &#9729;
  </Button>
);
