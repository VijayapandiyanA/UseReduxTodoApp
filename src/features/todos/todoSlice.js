import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const loadTodos = () => {
  const data = localStorage.getItem("todos");
  return data ? JSON.parse(data) : [];
};

const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: loadTodos(),
    search: "",
  },

  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: uuidv4(),
        text: action.payload.text,
        priority: action.payload.priority,
        date: action.payload.date,
        completed: false,
      });

      saveTodos(state.todos);
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
      saveTodos(state.todos);
    },

    toggleTodo: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      todo.completed = !todo.completed;
      saveTodos(state.todos);
    },

    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, setSearch } = todoSlice.actions;

export default todoSlice.reducer;