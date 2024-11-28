import { useState } from "react";
import "./App.css";
import QuoteContainer from "./components/QuoteContainer";
import { COLORS, QuoteData, QUOTES } from "./types";

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
    }, 700);
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
