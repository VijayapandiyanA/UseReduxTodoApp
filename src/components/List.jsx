import { useSelector } from "react-redux";
import TodoItem from "./Item";
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function TodoList() {

  const { todos, search } = useSelector((state) => state.todos);

  const filtered = todos.filter((t) =>
    t.text.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (search && filtered.length === 0) {
      toast.error("No matching tasks found ❌");
    }
  }, [search]);

  return (
    <div className="todo-list">
      {filtered.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}