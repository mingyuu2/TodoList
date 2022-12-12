import React from "react";
import styled from "styled-components";

const TodoItemStyle = styled.div``;

const TodoCheckButton = styled.button`

`;

const TodoDeleteButton = styled.button``;

function TodoItem( {isDone, content} ) {
  return (
    <TodoItemStyle>
      <TodoCheckButton>{isDone ? '완' : '미'}</TodoCheckButton>
        {content}
      <TodoDeleteButton>삭제</TodoDeleteButton>
    </TodoItemStyle>
  );
}

export default TodoItem;
