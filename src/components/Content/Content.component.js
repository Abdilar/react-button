import React from 'react';
import PropTypes from 'prop-types';
import CountdownTimer from "@sakit-sa/countdown-timer";
import Spinner, {NAME} from "@sakit-sa/react-spinner";

import style from "../index.module.scss";

const Content = (props) => {
  const {content = ''} = props.className;
  const wrapper = props.spinnerClasses.wrapper ? {wrapper: props.spinnerClasses.wrapper} : {};
  const spinner = props.spinnerClasses.spinner ? {spinner: `${props.spinnerClasses.spinner} ${style.react_display_inline_flex}`} : {spinner: style.react_display_inline_flex};
  const spinnerClass = {...wrapper, ...spinner};

  return (
    <React.Fragment>
      <span className={`${style.react_display_inline_block} ${style.react_content} ${props.isLoading ? style.react_content__hidden : ''} ${props.activatedTimer ? style.react_content__none : ''} ${content}`}>{props.children}</span>
      {
        props.activatedTimer && (
          <CountdownTimer time={props.time} format={props.timeFormat} className={props.timeClasses} onComplete={props.onCompletedTime} />
        )
      }
      {
        !props.activatedTimer && props.isLoading && (
          <Spinner isLoading={props.isLoading} name={props.spinnerName} ratio={props.spinnerRatio} className={spinnerClass}/>
        )
      }
    </React.Fragment>
  )
};

Content.defaultProps = {
  activatedTimer: false,
  className: {},
  isLoading: false,
  spinnerClasses: {},
  spinnerName: NAME.UIKIT,
  time: 0,
  timeClasses: {},
  timeFormat: 'MM:SS'
};

Content.propTypes = {
  activatedTimer: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.object,
  isLoading: PropTypes.bool,
  spinnerClasses: PropTypes.object,
  spinnerName: PropTypes.string,
  spinnerRatio: PropTypes.number,
  time: PropTypes.number,
  timeClasses: PropTypes.object,
  timeFormat: PropTypes.string,
  onCompletedTime: PropTypes.func
};

export default Content;
