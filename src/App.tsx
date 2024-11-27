import { useState } from "react";
import "./App.css";
import QuoteContainer from "./components/QuoteContainer";
import { QuoteData, QUOTES } from "./types";

const COLORS = [
  "bg-gradient-to-r from-green-200 via-teal-400 to-cyan-600",
  "bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500",
  "bg-gradient-to-r from-cyan-700 via-blue-500 to-indigo-600",
  "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
  "bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400",
  "bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500",
  "bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500",
  "bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500",
  "bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500",
  "bg-gradient-to-r from-gray-500 via-green-500 to-emerald-400",
  "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500",
  "bg-gradient-to-r from-gray-300 via-yellow-500 to-amber-400",
  "bg-gradient-to-r from-yellow-500 via-lime-500 to-green-500",
  "bg-gradient-to-r from-gray-800 via-blue-700 to-gray-900",
  "bg-gradient-to-r from-pink-200 via-purple-400 to-indigo-600",
  "bg-gradient-to-r from-yellow-200 via-lime-400 to-green-600",
];

function App() {
  const [bgColor, setBgColor] = useState<string>(COLORS[0]);
  const [circleColor, setCircleColor] = useState<string>("");
  const [quote, setQuote] = useState<QuoteData>(QUOTES[0]);

  const handleNewQuote = () => {
    const newColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    setCircleColor(newColor); // Start the circle animation
    setTimeout(() => {
      setBgColor(newColor); // Update the full background after the animation
      setCircleColor(""); // Remove the animation div
    }, 800); // Match the animation duration
    setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background color */}
      <div
        className={`absolute inset-0 ${bgColor}`}
        style={{ zIndex: 0 }}
      ></div>

      {/* Circle reveal animation */}
      {circleColor && (
        <div
          className={`circle-reveal ${circleColor}`}
          style={{ zIndex: 0 }} // Ensures it's under the quote box
        ></div>
      )}

      {/* Quote Box */}
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
