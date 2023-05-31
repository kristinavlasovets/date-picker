import React from 'react';

export const CalendarByMonthDecorator = (WrappedComponent) => {
  return function (props) {
    if (!props.isByMonth) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};
