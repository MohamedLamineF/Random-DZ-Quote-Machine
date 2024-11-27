import { useState } from "react";
import "./App.css";
import QuoteContainer from "./components/QuoteContainer";
import { QuoteData, QUOTES } from "./types";

const COLORS = [
  "bg-gradient-to-b from-green-200 via-teal-400 to-cyan-600",
  "bg-gradient-to-b from-red-500 via-orange-500 to-yellow-500",
  "bg-gradient-to-b from-cyan-700 via-blue-500 to-indigo-600",
  "bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500",
  "bg-gradient-to-b from-cyan-400 via-blue-400 to-indigo-400",
  "bg-gradient-to-b from-yellow-500 via-orange-500 to-red-500",
  "bg-gradient-to-b from-blue-500 via-cyan-500 to-teal-500",
  "bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-500",
  "bg-gradient-to-b from-indigo-500 via-blue-500 to-cyan-500",
  "bg-gradient-to-b from-gray-500 via-green-500 to-emerald-400",
  "bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-500",
  "bg-gradient-to-b from-gray-300 via-yellow-500 to-amber-400",
  "bg-gradient-to-b from-yellow-500 via-lime-500 to-green-500",
  "bg-gradient-to-b from-gray-800 via-blue-700 to-gray-900",
  "bg-gradient-to-b from-pink-200 via-purple-400 to-indigo-600",
  "bg-gradient-to-b from-yellow-200 via-lime-400 to-green-600",
];

function App() {
  const [bgColor, setBgColor] = useState<string>(COLORS[0]);
  const [circleColor, setCircleColor] = useState<string>("");
  const [quote, setQuote] = useState<QuoteData>(QUOTES[0]);

  const handleNewQuote = () => {
    const newColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    setCircleColor(newColor);
    setTimeout(() => {
      setBgColor(newColor);
      setCircleColor("");
    }, 900);
    setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className={`absolute inset-0 ${bgColor}`}
        style={{ zIndex: 0 }}
      ></div>

      {circleColor && (
        <div
          className={`circle-reveal ${circleColor}`}
          style={{ zIndex: 0 }}
        ></div>
      )}

      <div className="relative z-10">
        <QuoteContainer
          textQuote={quote.content}
          authorQuote={quote.author}
          onNewQuote={handleNewQuote}
        />
      </div>
    </div>
  );
}

export default App;
