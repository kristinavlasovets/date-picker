import React, { FC } from 'react';

import { buttonText } from '@/constants/config/components/button';

import { ClearButton } from './styles';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = ({ onHandlerClearDate }) => {
  const { text } = buttonText;
  return <ClearButton onClick={onHandlerClearDate}>{text}</ClearButton>;
};

export default Button;
