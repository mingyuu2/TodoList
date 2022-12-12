import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoCreate from "./component/TodoCreate";
import TodoHead from "./component/TodoHead";
import TodoList from "./component/TodoList";
import TodoTemplete from "./component/TodoTemplete";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplete>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplete>
    </>
  );
}

export default App;
