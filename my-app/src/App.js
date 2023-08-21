// import styles from "./App.module.css";
import { useState, useRef } from "react";
import { useCallback } from "react";
import TodoAdd from "./components/TodoAdd";
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트 공부하기",
      checked: true,
      star: false,
    },
    {
      id: 2,
      text: "도서관가서 책 빌리기",
      checked: true,
      star: false,
    },
    {
      id: 3,
      text: "방 청소하기",
      checked: false,
      star: true,
    },
  ]);

  const nextId = useRef(4);
  /* 
  리렌더링 막기 위해 
  useRef() 현재 상태 알 수 있다
  하지만 값이 변했을때 리렌더링이 되지 않는다  */

  const onAdd = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      text == 0 ? alert("할 일을 입력해주세요!") : setTodos(todos.concat(todo));
      nextId.current++;
    },
    [todos]
  );
  // id를 어떻게 매기는가?
  // todo id textchecked star 정해줘야함!

  localStorage.setItem("todo", 1);

  const onCheck = useCallback(
    (id) => {
      setTodos(
        todos.map(
          (todo) =>
            todo.id === id ? { ...todo, checked: !todo.checked } : todo
          // 나머지 요소  복사 , checked만 변경
        )
      );
    },
    [todos]
    // todos 변화가 있을때만 넘겨준다
  );

  const onRemove = useCallback(
    (id) => setTodos(todos.filter((todo) => todo.id !== id)),
    [todos]
  );

  const onImportant = useCallback((id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, star: !todo.star } : todo
      )
    );
  });
  // star key : value

  return (
    <>
      <TodoTemplate>
        <TodoAdd onAdd={onAdd} />
        <TodoList
          todos={todos}
          onRemove={onRemove}
          onCheck={onCheck}
          onImportant={onImportant}
        />
      </TodoTemplate>
    </>
  );
}
export default App;
