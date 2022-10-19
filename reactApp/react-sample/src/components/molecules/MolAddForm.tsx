import React from "react";
import { AtmInput } from "../atoms/AtmInput";
import { AtmButton } from "../atoms/AtmButton";

export const MolAddForm = (props:any) => {
  const { todoText, onChange, onClick } = props;
  return (
    <>
        <AtmInput placeholder="Todo" value={todoText} onChange={onChange} />
        <AtmButton buttonText="追加" onClick={onClick}/>
    </>
  );
};
