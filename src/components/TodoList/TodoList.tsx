import React, { FC, useEffect, useState } from 'react';

import MyClearSvg from '../../assets/icons/clear.svg';
import MyCloseSvg from '../../assets/icons/close.svg';
import MyAddSvg from '../../assets/icons/plus.svg';
import { TodoListText } from '../../constants/config/components/todoList';
import TodoItem from '../TodoItem/TodoItem';
import { ITodoItem } from '../TodoItem/types';

import {
  CloseIconWrapper,
  HeaderWrapper,
  Icon,
  IconWrapper,
  Input,
  Title,
  Wrapper,
} from './styles';
import { TodoListProps } from './types';

const TodoList: FC<TodoListProps> = ({
  selectedDate,
  onHandlerShowTodoList,
}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodoItem[]>([] as ITodoItem[]);

  useEffect(() => {
    const t = localStorage.getItem(`${selectedDate.getTime()}todos`);
    if (t !== null) {
      setTodos(
        JSON.parse(t).filter(
          (todo: ITodoItem) => todo.day === selectedDate.getTime()
        )
      );
    } else {
      setTodos([]);
    }
  }, [selectedDate]);

  const onHandlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentInputValue = e.target.value;
    setInputValue(currentInputValue);
  };

  const onHandlerClearInput = () => {
    setInputValue('');
  };

  const onHandlerClose = () => {
    onHandlerShowTodoList(false);
  };

  const onHandlerAddTodo = () => {
    const currentTodos = todos.concat([
      {
        id: Date.now(),
        day: selectedDate.getTime(),
        title: inputValue,
        completed: false,
      },
    ]);

    inputValue !== '' && setTodos(currentTodos);
    setInputValue('');

    localStorage.setItem(
      `${selectedDate.getTime()}todos`,
      JSON.stringify(currentTodos)
    );
  };

  const toggleCompleted = (id: number) => {
    const currentTodos = todos.filter((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(currentTodos);

    localStorage.setItem(
      `${selectedDate.getTime()}todos`,
      JSON.stringify(currentTodos)
    );
  };

  const deleteTodo = (id: number) => {
    const currentTodos = todos.filter((todo) => todo.id !== id);

    setTodos(currentTodos);

    localStorage.setItem(
      `${selectedDate.getTime()}todos`,
      JSON.stringify(currentTodos)
    );
  };

  const { inputType, title, placeholder, closeAlt, clearAlt, addAlt } =
    TodoListText;
  return (
    <Wrapper>
      <HeaderWrapper>
        <Title>{selectedDate && selectedDate.toLocaleDateString()}</Title>
        <Title>
          {todos.length} {title}
        </Title>
        <CloseIconWrapper>
          <Icon src={MyCloseSvg} alt={closeAlt} onClick={onHandlerClose} />
        </CloseIconWrapper>
      </HeaderWrapper>
      <HeaderWrapper>
        <Input
          type={inputType}
          value={inputValue}
          onChange={onHandlerChange}
          placeholder={placeholder}
        />
        <IconWrapper>
          <Icon src={MyClearSvg} alt={clearAlt} onClick={onHandlerClearInput} />
        </IconWrapper>
        <IconWrapper>
          <Icon src={MyAddSvg} alt={addAlt} onClick={onHandlerAddTodo} />
        </IconWrapper>
      </HeaderWrapper>
      {todos &&
        todos.map(({ id, title, completed }) => (
          <TodoItem
            key={id}
            id={id}
            day={selectedDate.getTime()}
            title={title}
            completed={completed}
            toggleCompleted={toggleCompleted}
            deleteTodo={deleteTodo}
          />
        ))}
    </Wrapper>
  );
};

export default TodoList;
