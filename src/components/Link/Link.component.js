import React from 'react';

import style from '../index.module.scss';

const Link = React.forwardRef((props, ref) => (
  <a
    id={props.id}
    ref={ref}
    className={`${style.react_link} ${props.className}`}
    href={props.href}
    aria-disabled={props.disabled}
    style={props.style}
    target={props.target}
    onClick={props.onClick}
  >
    {props.children}
  </a>
));

export default Link;
