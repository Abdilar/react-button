import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {NAME} from "@sakit-sa/react-spinner";
import {COLOR, ROUNDED, SIZE, SPINNER_RATIO, TARGET, TYPE, VARIANT} from "../../configs/variables";
import {isEmpty, isEmptyString, isFunction, isNumber, randomNumber} from "../../utils/functions";
import {Content, Link} from '../';

import style from '../index.module.scss';

const Button = (props) => {
  const [id, setId] = useState('react-button');
  const [activeTimer, setActiveTimer] = useState(props.activeTimer && !!props.time);
  const [spinnerRatio, setSpinnerRatio] = useState(props.ratio);
  const [buttonStyles, setButtonStyles] = useState({});
  const buttonRef = useRef();
  const disabledClass = props.disabled ? style[`react_button__disabled_${props.variant}`] : '';
  const iconClass = props.isIcon ? `${style.react_button_icon} ${style[`react_button_icon_${props.size}`]}` : '';
  const classes = `${style[`react_button_${props.variant}_${props.color}`]} ${style[`react_button_round__${props.round}`]} ${style[`react_button_${props.size}`]} ${iconClass} ${disabledClass} ${activeTimer || props.isLoading || props.disabled ? style.react_button_deactivate : ''}`;
  const {button = ''} = props.className;

  useEffect(() => {
    getRatio();
  }, []);

  useEffect(() => {
    const id = !isEmptyString(props.id) ? props.id : `react-button-${randomNumber(10000)}`;
    setId(id);
  }, [props.id]);

  useEffect(() => {
    getRatio();
  }, [props.size]);

  useEffect(() => {
    if (!props.time) return; // TODO: REMOVE this line when countdownTimer fix it

    calcButtonStyles();
    setActiveTimer(props.activeTimer);
  }, [props.activeTimer]);

  const getRatio = () => {
    const ratio = isNumber(props.spinnerRatio) && !!props.spinnerRatio ? props.spinnerRatio : SPINNER_RATIO[props.size];
    setSpinnerRatio(ratio);
  };

  const calcButtonStyles = () => {
    if (props.activeTimer) {
      const buttonEl = buttonRef.current;
      const minWidth = buttonEl.offsetWidth;
      const minHeight = buttonEl.offsetHeight;
      setButtonStyles({minWidth, minHeight});
    } else {
      setButtonStyles({});
    }
  };

  const handleCompleteTime = () => {
    setActiveTimer(false);
    setButtonStyles({});
    isFunction(props.onCompleteTime) && props.onCompleteTime();
  };

  const handleClick = (e) => {
    if (props.disabled || activeTimer || props.isLoading) return;
    animateContent();
    isFunction(props.onClick) && props.onClick(e);
  };

  const animateContent = () => {
    if (!props.animatable || (isEmpty(buttonRef.current) && isEmpty(buttonRef.current.children))) return;
    const contentEl = buttonRef.current.children[0];
    contentEl.classList.add(style.react_animate__pulse);
    setTimeout(() => contentEl.classList.remove(style.react_animate__pulse), 300);
  };

  return (
    isEmptyString(props.href) ? (
      <button
        id={id}
        ref={buttonRef}
        disabled={props.disabled}
        type={props.type}
        className={`${classes} ${button}`}
        style={buttonStyles}
        onClick={handleClick}
      >
        <Content onCompletedTime={handleCompleteTime} activatedTimer={activeTimer} spinnerRatio={spinnerRatio} {...props} />
      </button>
    ) : (
      <Link
        id={id}
        disabled={props.disabled}
        ref={buttonRef}
        className={`${classes} ${button}`}
        href={props.href}
        target={props.hrefTarget}
        style={buttonStyles}
        onClick={handleClick}
      >
        <Content onCompletedTime={handleCompleteTime} activatedTimer={activeTimer} spinnerRatio={spinnerRatio} {...props} />
      </Link>
    )
  )
};

Button.defaultProps = {
  activeTimer: false,
  animatable: false,
  className: {},
  color: COLOR.PRIMARY,
  disabled: false,
  href: '',
  hrefTarget: TARGET.BLANK,
  isIcon: false,
  isLoading: false,
  round: ROUNDED.LOW,
  size: SIZE.SMALL,
  spinnerClasses: {},
  spinnerName: NAME.UIKIT,
  time: 0,
  timeClasses: {},
  timeFormat: 'MM:SS',
  type: TYPE.BUTTON,
  variant: VARIANT.CONTAINED
};

Button.propTypes = {
  activeTimer: PropTypes.bool,
  animatable: PropTypes.bool,
  className: PropTypes.object,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  hrefTarget: PropTypes.string,
  id: PropTypes.string,
  isIcon: PropTypes.bool,
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
};

export default Button;

// TODO: add rel prop to Link component
