import "../App.css";
import "../components/TodoTemplate.css";
import TodoHead from "../components/TodoHead";

function TodoTemplate({ children }) {
  return (
    <div className="TodoTemplate">
      <TodoHead />
      {children}
    </div>
  );
}

export default TodoTemplate;
