import { CalendarGridProps } from '@/components/CalendarGrid/types';
import React from 'react';

export const CalendarByWeekDecorator = (
  WrappedComponent: React.ElementType
) => {
  return function (props: CalendarGridProps) {
    if (!props.isByWeek) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};
