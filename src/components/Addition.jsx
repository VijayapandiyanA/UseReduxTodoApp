import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";
import { toast } from "react-toastify";

export default function AddTodo() {

  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Low");
  const [date, setDate] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();

  if (!text) {
    toast.error("Please enter a task");
    return;
  }

  dispatch(addTodo({ text, priority, date }));

  toast.success("Task added successfully ✅");

  setText("");
};

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        placeholder="Enter task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <select onChange={(e) => setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <input type="date" onChange={(e) => setDate(e.target.value)} />

      <button>Add</button>
    </form>
  );
}