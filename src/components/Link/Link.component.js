import React from 'react';
import PropTypes from "prop-types";
import {TARGET} from "../../configs/variables";

import style from '../index.module.scss';

const Link = React.forwardRef((props, ref) => (
  <a
    aria-disabled={props.disabled}
    className={`${style.react_link} ${props.className}`}
    href={props.href}
    id={props.id}
    ref={ref}
    style={props.style}
    target={props.target}
    onClick={props.onClick}
  >
    {props.children}
  </a>
));

Link.defaultProps = {
  className: '',
  disabled: false,
  href: '',
  style: {},
  target: TARGET.BLANK
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.object,
  target: PropTypes.string,
  onClick: PropTypes.func
};

export default Link;
