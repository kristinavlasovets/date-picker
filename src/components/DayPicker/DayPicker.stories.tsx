import React from 'react';

import { holidays } from '@/constants';
import type { Meta, StoryObj } from '@storybook/react';

import DayPicker from '.';

const meta: Meta<typeof DayPicker> = {
  title: 'Components/DayPicker',
  component: DayPicker,
  argTypes: {
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
    onHandlerShowButton: {
      table: {
        disable: true,
      },
    },
    onHandlerRangeDate: {
      table: {
        disable: true,
      },
    },
    isClearButton: {
      table: {
        disable: true,
      },
    },
    defaultValue: {
      control: { type: 'date' },
    },
    minDate: {
      control: { type: 'date' },
    },
    maxDate: {
      control: { type: 'date' },
    },
    variant: {
      options: ['month', 'week', 'year'],
      control: { type: 'radio' },
    },
    $holidayColor: { control: 'color' },
    $textColor: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<typeof DayPicker>;

export const Default: Story = {
  args: {
    defaultValue: new Date(),
    minDate: new Date(2023, 4, 24),
    maxDate: new Date(2023, 7, 23),
    variant: 'month',
    holidays: holidays,
  },

  render: (args) => {
    const defaultValue = new Date(args.defaultValue);
    const minDate = new Date(args.minDate);
    const maxDate = new Date(args.maxDate);
    return (
      <DayPicker
        {...args}
        defaultValue={defaultValue}
        minDate={minDate}
        maxDate={maxDate}
      />
    );
  },
};
