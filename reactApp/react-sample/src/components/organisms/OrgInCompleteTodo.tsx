import React from "react";
import { AtmButton } from "../atoms/AtmButton";

export const OrgInCompleteTodos = (props:any) => {
  const { inCompleteTodos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTodo</p>
      <ul>
        {inCompleteTodos.map((todo:string, index:number) => {
          return (
            <div key={todo+index} className="list-row">
              <li>{todo}</li>
              <AtmButton buttonText="完了" onClick={() => onClickComplete(index)}/>
              <AtmButton buttonText="削除" onClick={() => onClickDelete(index)}/>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
