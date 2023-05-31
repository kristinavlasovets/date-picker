import React, { FC, useState } from 'react';

import MyCalendarSvg from '@/assets/icons/calendar.svg';
import MyClearSvg from '@/assets/icons/clear.svg';
import { dateSelectorText } from '@/constants/config/components/dateSelector';
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

const DateSelector: FC<DateSelectorProps> = ({
  minDate,
  maxDate,
  onHandlerSelectDate,
  onHandlerShowPopUp,
}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onHandlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentInputValue = e.target.value;
    setInputValue(currentInputValue);
    setErrorMessage('');

    if (!getValidatedDate(currentInputValue)) {
      setErrorMessage('Incorrect data. Please, use dd/mm/yyyy format.');
      return;
    }

    const [day, month, year] = currentInputValue
      .split('/')
      .map((item) => Number(item));

    const selectedDate = new Date(year, month - 1, day);

    if (!getDateInRange(selectedDate, minDate, maxDate)) {
      setErrorMessage('Current date is out of range.');
      return;
    }

    onHandlerSelectDate(selectedDate);
  };

  const onHandlerTogglePopUp = () => {
    onHandlerShowPopUp();
  };

  const onHandlerClearInput = () => {
    setInputValue('');
    setErrorMessage('');
  };

  const { calendarAlt, inputType, placeholder, clearAlt } = dateSelectorText;

  return (
    <Wrapper>
      <SelectorWrapper>
        <IconWrapper>
          <Icon
            src={MyCalendarSvg}
            alt={calendarAlt}
            onClick={onHandlerTogglePopUp}
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
          <Icon src={MyClearSvg} alt={clearAlt} onClick={onHandlerClearInput} />
        </IconWrapper>
      </SelectorWrapper>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Wrapper>
  );
};

export default DateSelector;
