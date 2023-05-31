import React from 'react';

import { holidays } from '@/constants/config/holidays';
import type { Meta, StoryObj } from '@storybook/react';

import RangePicker from './RangePicker';

const meta: Meta<typeof RangePicker> = {
  title: 'Components/Range Picker',
  component: RangePicker,
  argTypes: {
    defaultStartDate: {
      table: {
        disable: true,
      },
    },
    defaultEndDate: {
      table: {
        disable: true,
      },
    },
    startDate: {
      table: {
        disable: true,
      },
    },
    endDate: {
      table: {
        disable: true,
      },
    },
    variant: {
      options: ['day', 'week', 'month'],
      control: { type: 'radio' },
    },
    $holidayColor: { control: 'color' },
    $textColor: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<typeof RangePicker>;

const currentDay = new Date();
currentDay.setDate(new Date().getDate() - 1);
const nextDay = new Date();
nextDay.setDate(new Date().getDate() + 6);

export const Default: Story = {
  args: {
    variant: 'day',
    defaultStartDate: currentDay,
    defaultEndDate: nextDay,
    minDate: new Date(2023, 4, 20),
    maxDate: new Date(2023, 5, 30),
    holidays: holidays,
  },
  render: (args) => {
    const defaultStartDate = new Date(args.defaultStartDate);
    const defaultEndDate = new Date(args.defaultEndDate);
    const minDate = new Date(args.minDate);
    const maxDate = new Date(args.maxDate);
    return (
      <RangePicker
        {...args}
        defaultStartDate={defaultStartDate}
        defaultEndDate={defaultEndDate}
        minDate={minDate}
        maxDate={maxDate}
      />
    );
  },
};
