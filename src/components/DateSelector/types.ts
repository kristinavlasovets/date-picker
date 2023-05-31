export interface DateSelectorProps {
  minDate: Date;
  maxDate: Date;
  onHandlerSelectDate: (date: Date) => void;
  onHandlerShowPopUp: () => void;
}
