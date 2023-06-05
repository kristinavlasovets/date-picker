import React from 'react';

import { CalendarGridProps } from '@/components/CalendarGrid/types';

export const CalendarByMonthDecorator = (WrappedComponent: React.ElementType) =>
  function (props: CalendarGridProps) {
    if (!props.isByMonth) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
