import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import CountdownTimer from "@sakit-sa/countdown-timer";
import Spinner, {NAME} from "@sakit-sa/react-spinner";
import {COLOR, ROUNDED, SIZE, SPINNER_RATIO, TYPE, VARIANT} from "../../configs/variables";
import {isFunction, isNumber} from "../../utils/functions";

import style from '../index.module.scss';

const Button = (props) => {
  const [activeTimer, setActiveTimer] = useState(props.activeTimer);
  const [disabled, setDisabled] = useState(props.disabled);
  const [showChildren, setShowChildren] = useState(!props.activeTimer && !props.isLoading);
  const [spinnerRatio, setSpinnerRatio] = useState(props.ratio);
  const disabledClass = props.disabled ? `button__disabled_${props.variant}` : '';

  useEffect(() => {
    getRatio();
  }, []);

  useEffect(() => {
    getRatio();
  }, [props.size]);

  useEffect(() => {
    const isDeactivate = props.activeTimer;
    setShowChildren(!isDeactivate);
    setActiveTimer(isDeactivate);
  }, [props.activeTimer]);

  useEffect(() => {
    // if (activeTimer) return;
    const isDeactivate = props.isLoading;
    setShowChildren(!isDeactivate);
    setActiveTimer(!isDeactivate);
  }, [props.isLoading]);

  const getRatio = () => {
    const ratio = isNumber(props.spinnerRatio) ? props.spinnerRatio : SPINNER_RATIO[props.size];
    setSpinnerRatio(ratio);
  }

  const handleCompleteTime = () => {
    setShowChildren(true);
    setActiveTimer(false);
    isFunction(props.onCompleteTime) && props.onCompleteTime();
  }

  const handleClick = () => {
    if (props.disabled) return;
    isFunction(props.onClick) && props.onClick();
  }

  return (
    <button
      disabled={disabled}
      type={props.type}
      className={`${style[`button_${props.variant}_${props.color}`]} ${style[`button_round__${props.round}`]} ${style[`button_${props.size}`]} ${style[disabledClass]}`}
      onClick={handleClick}
    >
      {
        showChildren ? props.children : (
          activeTimer ? (
            <CountdownTimer time={props.time} format={props.timeFormat} className={props.timeClasses} onComplete={handleCompleteTime} />
          ) : (
            <Spinner isLoading={props.isLoading} name={props.spinnerName} ratio={spinnerRatio} className={props.spinnerClasses} />
          )
        )
      }
    </button>
  )
}

Button.defaultProps = {
  activeTimer: false,
  color: COLOR.PRIMARY, // DONE
  disabled: false, // DONE
  href: '',
  isLoading: false,
  round: ROUNDED.LOW, // DONE
  size: SIZE.SMALL, // DONE
  spinnerClasses: {},
  spinnerName: NAME.UIKIT,
  time: 0,
  timeClasses: {},
  timeFormat: 'MM:SS',
  type: TYPE.BUTTON, // DONE
  variant: VARIANT.TEXT // DONE
};

Button.propTypes = {
  activeTimer: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  isLoading: PropTypes.bool,
  round: PropTypes.string,
  size: PropTypes.string,
  spinnerClasses: PropTypes.object,
  spinnerName: PropTypes.string,
  spinnerRatio: PropTypes.number,
  time: PropTypes.number,
  timeClasses: PropTypes.object,
  timeFormat: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  onCompleteTime: PropTypes.func
}

export default Button;
