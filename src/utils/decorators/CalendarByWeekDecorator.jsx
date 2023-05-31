import React from 'react';

export const CalendarByWeekDecorator = (WrappedComponent) => {
  return function (props) {
    if (!props.isByWeek) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};
