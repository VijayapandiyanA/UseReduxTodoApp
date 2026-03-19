import AddTodo from "./components/Addition";
import TodoList from "./components/List";
import SearchBar from "./components/SearchBar";
import ProgressBar from "./components/ProgressBar";
import DarkMode from "./components/DarkMode";
import "./App.css";

function App() {

  return (
    <div className="app">

      <h1>Redux Todo</h1>

      <DarkMode />

      <AddTodo />

      <SearchBar />

      <TodoList />

      <ProgressBar />

    </div>
  );
}

export default App;