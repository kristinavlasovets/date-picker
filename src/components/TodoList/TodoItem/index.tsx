import React, { FC } from 'react';

import MyDeleteSvg from '@/assets/icons/delete.svg';
import { TodoItemText } from '@/constants';

import { Checkbox, Icon, IconWrapper, Text, Wrapper } from './styles';
import { ITodoItem } from './types';

const { inputType, deleteAlt } = TodoItemText;

const TodoItem: FC<ITodoItem> = ({
  id,
  title,
  completed,
  toggleCompleted,
  deleteTodo,
}) => {
  const onHandlerDeleteTodo = () => {
    deleteTodo && deleteTodo(id);
  };

  const onHandlerCompleteTodo = () => {
    toggleCompleted && toggleCompleted(id);
  };

  return (
    <Wrapper>
      <Checkbox type={inputType} onClick={onHandlerCompleteTodo} />
      <Text completed={completed}>{title}</Text>
      <IconWrapper>
        <Icon src={MyDeleteSvg} alt={deleteAlt} onClick={onHandlerDeleteTodo} />
      </IconWrapper>
    </Wrapper>
  );
};

export default TodoItem;
