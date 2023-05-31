import { CalendarGridProps } from '@/components/CalendarGrid/types';
import React from 'react';

export const CalendarByMonthDecorator = (
  WrappedComponent: React.ElementType
) => {
  return function (props: CalendarGridProps) {
    if (!props.isByMonth) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};
