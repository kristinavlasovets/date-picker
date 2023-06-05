import React from 'react';

import { CalendarGridProps } from '@/components/CalendarGrid/types';

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
