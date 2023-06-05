import React from 'react';

import { CalendarGridProps } from '@/components/CalendarGrid/types';

export const CalendarByWeekDecorator = (WrappedComponent: React.ElementType) =>
  function (props: CalendarGridProps) {
    if (!props.isByWeek) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
