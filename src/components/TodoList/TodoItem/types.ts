export interface ITodoItem {
  id: number;
  day: number;
  title: string;
  completed: boolean;

  toggleCompleted?: (id: number) => void;
  deleteTodo?: (id: number) => void;
}

export interface TextProps {
  completed: boolean;
}
