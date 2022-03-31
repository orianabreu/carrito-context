import React from 'react';
import { MyButton } from './ButtonStyles';

export default function Button(props) {
  return (
    <MyButton {...props}>{props.children}</MyButton>
  )
}
