import React from "react";
import { MolAddForm } from "../molecules/MolAddForm";

export const OrgInputTodo = (props:any) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input-area">
      <MolAddForm
        todoText={todoText}
        onChange={onChange}
        onClick={onClick}
      />
    </div>
  );
};
