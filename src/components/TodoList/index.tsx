import React, { FC, useEffect, useState } from 'react';

import MyClearSvg from '@/assets/icons/clear.svg';
import MyCloseSvg from '@/assets/icons/close.svg';
import MyAddSvg from '@/assets/icons/plus.svg';
import { TodoListText } from '@/constants';
import { getItemFromLocalStorage } from '@/utils/helpers/getItemFromLocalStorage';
import { setItemToLocalStorage } from '@/utils/helpers/setItemToLocalStorage';

import { ITodoItem } from './TodoItem/types';
import {
  CloseIconWrapper,
  HeaderWrapper,
  Icon,
  IconWrapper,
  Input,
  Title,
  Wrapper,
} from './styles';
import TodoItem from './TodoItem';
import { TodoListProps } from './types';

const { inputType, title, placeholder, closeAlt, clearAlt, addAlt } =
  TodoListText;

const TodoList: FC<TodoListProps> = ({
  selectedDate,
  onHandlerShowTodoList,
}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodoItem[]>([]);

  useEffect(() => {
    const currentDateTodos = getItemFromLocalStorage(
      `${selectedDate.getTime()}todos`
    );

    if (Array.isArray(currentDateTodos)) {
      setTodos(
        currentDateTodos.filter(
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

    setItemToLocalStorage(`${selectedDate.getTime()}todos`, currentTodos);
  };

  const toggleCompleted = (id: number) => {
    setTodos((prevTodos) => {
      const todo = prevTodos.find((item) => item.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }

      setItemToLocalStorage(`${selectedDate.getTime()}todos`, [...prevTodos]);
      return [...prevTodos];
    });
  };

  const deleteTodo = (id: number) => {
    const currentTodos = todos.filter((todo) => todo.id !== id);

    setTodos(currentTodos);

    setItemToLocalStorage(`${selectedDate.getTime()}todos`, currentTodos);
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <Title>{selectedDate && selectedDate.toLocaleDateString()}</Title>
        <Title>{`${todos.length} ${title}`}</Title>
        <CloseIconWrapper>
          <Icon
            src={MyCloseSvg}
            alt={closeAlt}
            onClick={onHandlerClose}
            aria-label={closeAlt}
          />
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
          <Icon
            src={MyClearSvg}
            alt={clearAlt}
            onClick={onHandlerClearInput}
            aria-label={clearAlt}
          />
        </IconWrapper>
        <IconWrapper>
          <Icon
            src={MyAddSvg}
            alt={addAlt}
            onClick={onHandlerAddTodo}
            aria-label={addAlt}
          />
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
