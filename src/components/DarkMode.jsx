import { useState } from "react";

export default function DarkMode() {

  const [dark, setDark] = useState(false);

  const toggle = () => {
    document.body.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <button className="dark-btn" onClick={toggle}>
      {dark ? "☀ Light" : "🌙 Dark"}
    </button>
  );
}