import { useDispatch } from "react-redux";
import { setSearch } from "../features/todos/todoSlice";

export default function SearchBar() {

  const dispatch = useDispatch();

  return (
    <div className="search-box">
      <input
        placeholder="Search Todos..."
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
    </div>
  );
}