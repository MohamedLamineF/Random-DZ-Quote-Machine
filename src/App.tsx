import { useState } from "react";
import "./App.css";

const COLORS = [
  "bg-indigo-600",
  "bg-purple-600",
  "bg-pink-600",
  "bg-rose-600",
  "bg-orange-600",
  "bg-amber-600",
  "bg-lime-600",
  "bg-emerald-600",
  "bg-teal-600",
  "bg-cyan-600",
] as const;
function App() {
  const [bgColor, setBgColor] = useState<string>(COLORS[0]);
  return (
    <div
      className={`min-h-screen ${bgColor} transition-colors duration-500 flex items-center justify-center p-4`}
    >
      <div id="quote-box">
        <div id="text">Text</div>
        <div id="author">Quote Author</div>
        <button id="new-quote">New Quote</button>
        <a id="tweet-quote">Tweet</a>
      </div>
    </div>
  );
}

export default App;
