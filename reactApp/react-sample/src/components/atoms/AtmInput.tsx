import React from "react";

export const AtmInput = (props:any) => {
  const {placeholder, value, onChange } = props;
  return (
    <>
        <input placeholder={placeholder} value={value} onChange={onChange} />
    </>
  );
};
