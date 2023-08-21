import React, { useState } from "react";
import "../components/TodoAdd.css";
import { MdAddCircleOutline } from "react-icons/md";

const TodoAdd = ({ onAdd }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(value);
    setValue("");
  };

  return (
    <form onSubmit={onSubmit} className="TodoAdd">
      <input
        className="input"
        placeholder="할일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAddCircleOutline />
      </button>
    </form>
  );
};

export default TodoAdd;
