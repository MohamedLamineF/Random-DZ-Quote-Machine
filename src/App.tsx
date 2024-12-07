import { useState } from "react";
import "./App.css";
import QuoteContainer from "./components/QuoteContainer";
import { GRADIENT_COLORS } from "./types";
import { useQuotes } from "./hooks/useQuotes";

function App() {
  const { quote, isLoading, fetchNewQuote, language, changeLanguage } =
    useQuotes();
  const [bgColor, setBgColor] = useState<number>(0);

  const handleNewQuote = () => {
    setBgColor((prev) => (prev + 1) % GRADIENT_COLORS.length);
    fetchNewQuote();
  };

  return (
    <div
      className={`min-h-screen ${GRADIENT_COLORS[bgColor]} transition-all duration-1000 ease-in-out flex flex-col items-center justify-between p-4 animate-gradient-x`}
    >
      <div></div>

      <div>
        <QuoteContainer
          quote={quote}
          isLoading={isLoading}
          onNewQuote={handleNewQuote}
          language={language}
          onChangeLanguage={changeLanguage}
        />
      </div>

      <div>by me</div>
    </div>
  );
}

export default App;
