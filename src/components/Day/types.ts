export interface DayProps {
  variant:
    | 'default'
    | 'hover'
    | 'disabled'
    | 'selected'
    | 'range-start'
    | 'range-in-between'
    | 'range-end'
    | 'holiday'
    | 'weekend';
  holidaycolor?: string;
  currentday?: number;
  day?: number | string;
  disabled?: boolean;
  showweekend: boolean;

  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
