import React, { FC, useState } from 'react';

import MyCalendarSvg from '@/assets/icons/calendar.svg';
import MyClearSvg from '@/assets/icons/clear.svg';
import { DateSelectorText } from '@/constants';
import {
  getDateInRange,
  getValidatedDate,
} from '@/utils/helpers/DateSelectorHelpers';

import {
  ErrorMessage,
  Icon,
  IconWrapper,
  Input,
  SelectorWrapper,
  Wrapper,
} from './styles';
import { DateSelectorProps } from './types';

const {
  formatError,
  rangeError,
  calendarAlt,
  inputType,
  placeholder,
  clearAlt,
} = DateSelectorText;

const DateSelector: FC<DateSelectorProps> = ({
  minDate,
  maxDate,
  onHandlerSelectDate,
  onHandlerShowPopUp,
  onHandlerSetDayByInput,
}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onHandlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentInputValue = e.target.value;
    setInputValue(currentInputValue);
    setErrorMessage('');

    if (!getValidatedDate(currentInputValue)) {
      setErrorMessage(formatError);
      return;
    }

    const [day, month, year] = currentInputValue
      .split('/')
      .map((item) => Number(item));

    const selectedDate = new Date(year, month - 1, day);

    if (!getDateInRange(selectedDate, minDate, maxDate)) {
      setErrorMessage(rangeError);
      return;
    }

    onHandlerSelectDate(selectedDate);
    onHandlerSetDayByInput(true);
  };

  const onHandlerTogglePopUp = () => {
    onHandlerShowPopUp();
  };

  const onHandlerClearInput = () => {
    setInputValue('');
    setErrorMessage('');
  };

  return (
    <Wrapper>
      <SelectorWrapper>
        <IconWrapper>
          <Icon
            src={MyCalendarSvg}
            alt={calendarAlt}
            onClick={onHandlerTogglePopUp}
            aria-label={calendarAlt}
          />
        </IconWrapper>
        <Input
          type={inputType}
          value={inputValue}
          onChange={onHandlerChange}
          placeholder={placeholder}
          maxLength={10}
        />
        <IconWrapper>
          <Icon
            src={MyClearSvg}
            alt={clearAlt}
            onClick={onHandlerClearInput}
            aria-label={clearAlt}
          />
        </IconWrapper>
      </SelectorWrapper>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Wrapper>
  );
};

export default DateSelector;
