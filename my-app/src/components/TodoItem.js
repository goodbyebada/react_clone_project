import React, { useEffect, useState } from "react";
import { MdDelete, MdCheckBoxOutlineBlank } from "react-icons/md";
import { BsCheckSquare, BsCheckSquareFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import cn from "classnames";
import "../components/TodoItem.css";

const TodoItem = ({ todo, onRemove, onCheck, onImportant }) => {
  // Todolist에서 함수 결정이 난다

  /* 
  여기서 todo는:
    {
      id: 1,
      text: "리액트 공부하기",
      checked: true,
      star: false,
    } 
    */

  const { id, text, checked, star } = todo;

  return (
    <div className={cn("ToDoItem", { star })}>
      <div className={cn("checkbox", { checked })} onClick={() => onCheck(id)}>
        {checked ? <BsCheckSquareFill id="svg" /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="itemButtons">
        <AiFillStar
          className={cn("important", { star })}
          onClick={() => onImportant(id)}
        />
        <MdDelete className="remove" onClick={() => onRemove(id)} />
      </div>
    </div>
  );
};

export default TodoItem;
