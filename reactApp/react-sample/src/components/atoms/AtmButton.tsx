import React from "react";

export const AtmButton = (props:any) => {
  const { buttonText, onClick } = props;
  return (
    <>
      <button onClick={onClick}>{buttonText}</button>
    </>
  );
};
