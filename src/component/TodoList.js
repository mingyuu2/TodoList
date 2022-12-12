import React from 'react'
import styled from 'styled-components'
import data from '../db/todo.json';
import TodoItem from './TodoItem';

const TodoListStyle = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListStyle>{data.item.map(item => (
        <TodoItem key={item.id} isDone={item.isDone} content={item.content} />
    ))}</TodoListStyle>
  )
}

export default TodoList