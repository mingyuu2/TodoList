import React from "react";
import styled from "styled-components";

const TodoTempleteStyle = styled.div`
  width: 512px;
  height: 720px;

  position: relative;
  background:white;
  border-radius: 12px;
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  margin-top: 72px;
  margin-bottom: 42px;
`;

function TodoTemplete({ children }) {
  return <TodoTempleteStyle>{children}</TodoTempleteStyle>;
}

export default TodoTemplete;
