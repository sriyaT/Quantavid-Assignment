import React from 'react';
import './style.css';

const Button = (props) => (
  <button type={props.type} onClick={props.handleClick}>
    {props.text}
  </button>
);

export default Button;
