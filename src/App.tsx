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

      <div className="grid grid-cols-3 w-full text-white/80 text-xs">
        <span className="mr-2 text-start text-ellipsis">
          Made for FreeCodeCamp Front End Development Libraries Projects
        </span>
        <div className="flex items-center justify-center gap-3">
          <a
            href="https://github.com/YourUsername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Github
          </a>
          <span className="text-white/50">•</span>
          <a
            href="https://linkedin.com/in/YourUsername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-white/50">•</span>
          <a
            href="https://twitter.com/YourUsername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Twitter
          </a>
          <span className="text-white/50">•</span>
          <a
            href="https://bsky.app/profile/YourUsername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Bluesky
          </a>
        </div>
        <span className="mr-2 text-end">© Lamine</span>
      </div>
    </div>
  );
}

export default App;
