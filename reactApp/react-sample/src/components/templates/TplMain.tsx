import React, { useState } from 'react';
import "../../styles.css";
import { OrgInputTodo } from "../organisms/OrgInputTodo";
import { OrgInCompleteTodos } from "../organisms/OrgInCompleteTodo";
import { OrgCompleteArea } from "../organisms/OrgCompleteArea";

export const TplMain = () => {
  const [todoText, setTodoText] = useState("");
  const [inCompleteTodos, setInCompleteTodos] = useState<string[]>([]);
  const [completeTodos, setCompleteTodos] = useState<string[]>([]);

  const onChangeTodoText = (event:any) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...inCompleteTodos, todoText];
    setInCompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index:number) => {
    const newTodos = [...inCompleteTodos];
    newTodos.splice(index, 1);
    setInCompleteTodos(newTodos);
  };

  const onClickComplete = (index:number) => {
    const newIncompleteTodos = [...inCompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, inCompleteTodos[index]];
    setInCompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index:number) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newInCompleteTodos = [...inCompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setInCompleteTodos(newInCompleteTodos);
  };

  return (
    <>
      { /* ヘッダーとか */}
      <OrgInputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <OrgInCompleteTodos
        inCompleteTodos={inCompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <OrgCompleteArea completeTodos={completeTodos} onClickBack={onClickBack} />
      { /* フッターとか */}
    </>
  );
};
