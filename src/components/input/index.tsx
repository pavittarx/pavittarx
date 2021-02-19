import React, { ChangeEventHandler } from "react";

import "./input.scss";

type InputProps = {
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  id?: string;
};

const TextInput = ({ id, placeholder, value, onChange }: InputProps) => {
  return (
    <div id={id} className="text-input">
      <input
        className="input-element"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
