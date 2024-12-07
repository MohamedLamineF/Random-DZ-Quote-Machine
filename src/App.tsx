import { useState } from "react";
import "./App.css";
import QuoteContainer from "./components/QuoteContainer";
import { GRADIENT_COLORS } from "./types";
import { useQuotes } from "./hooks/useQuotes";

function App() {
  const { quote, isLoading, fetchNewQuote } = useQuotes();
  const [bgColor, setBgColor] = useState<number>(0);

  const handleNewQuote = () => {
    setBgColor((prev) => (prev + 1) % GRADIENT_COLORS.length);
    fetchNewQuote();
  };

  return (
    <div
      className={`min-h-screen ${GRADIENT_COLORS[bgColor]} transition-all duration-1000 ease-in-out flex items-center justify-center p-4 animate-gradient-x`}
    >
      <QuoteContainer quote={quote} onNewQuote={handleNewQuote} />
    </div>
  );
}

export default App;
