import { useSelector } from "react-redux";

export default function ProgressBar() {

  const { todos } = useSelector((state) => state.todos);

  const completed = todos.filter((t) => t.completed).length;
  const percent = todos.length
    ? Math.round((completed / todos.length) * 100)
    : 0;

  return (
    <div className="progress-container">

      <p>Progress {percent}%</p>

      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: percent + "%" }}
        ></div>
      </div>

    </div>
  );
}