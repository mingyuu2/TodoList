import React from "react";
import styled from "styled-components";

const InputForm = styled.form`
  background: #f6f6f6;
  padding: 32px 32px 32px 32px;
  border-top: 1px solid #e9ecef;
`;

const InputFormPosition = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InputTodoList = styled.input`
  width: 100%;
  background-color: #e4e4e4;
  padding: 12px;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  font-size: 18px;
  box-sizing: border-box;
`;

function TodoCreate() {
  return (
    <div>
      <InputFormPosition>
        <InputForm>
          <InputTodoList placeholder="할 일 입력 후 Enter" />
        </InputForm>
      </InputFormPosition>
    </div>
  );
}

export default TodoCreate;
