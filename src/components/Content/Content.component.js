import React from 'react';
import CountdownTimer from "@sakit-sa/countdown-timer";
import Spinner from "@sakit-sa/react-spinner";

import style from "../index.module.scss";

const Content = (props) => {
  const {content = ''} = props.className;

  return (
    <React.Fragment>
      <span className={`${style.display_inline_block} ${props.isLoading ? style.content__hidden : ''} ${props.activatedTimer ? style.content__none : ''} ${content}`}>{props.children}</span>
      {
        props.activatedTimer && (
          <CountdownTimer time={props.time} format={props.timeFormat} className={props.timeClasses} onComplete={props.onCompletedTime} />
        )
      }
      {
        !props.activatedTimer && props.isLoading && (
          <Spinner isLoading={props.isLoading} name={props.spinnerName} ratio={props.spinnerRatio} className={props.spinnerClasses}/>
        )
      }
    </React.Fragment>
  )
};



export default Content;
