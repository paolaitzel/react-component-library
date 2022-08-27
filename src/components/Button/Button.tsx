import React from 'react';
import { ButtonProps } from './Button.types';

function Button({ label }: ButtonProps) {
  return <button type="button">{label}</button>;
}

export default Button;
