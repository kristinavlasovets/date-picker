import React, { FC } from 'react';

import { ButtonText } from '@/constants';

import { ClearButton } from './styles';
import { ButtonProps } from './types';

const { text } = ButtonText;

const Button: FC<ButtonProps> = ({ onHandlerClearDate }) => {
  return <ClearButton onClick={onHandlerClearDate}>{text}</ClearButton>;
};

export default Button;
