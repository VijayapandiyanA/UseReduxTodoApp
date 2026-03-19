import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../features/todos/todoSlice";

export default function TodoItem({ todo }) {

  const dispatch = useDispatch();

  return (
    <div className={`todo ${todo.completed ? "completed" : ""}`}>
      
      <div className="todo-text">

        <span>{todo.text}</span>

       <div className={`priority ${(todo.priority || "low").toLowerCase()}`}>
  {todo.priority || "Low"}
</div>

        <div className="due">
  📅 {todo.date && new Date(todo.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short"
  })}
</div>

      </div>

      <div className="actions">

        <button
          className="complete-btn"
          onClick={() => dispatch(toggleTodo(todo.id))}
        >
          ✓
        </button>

        <button
          className="delete-btn"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          ✕
        </button>

      </div>

    </div>
  );
}