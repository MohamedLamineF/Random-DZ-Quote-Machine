import { useState, useCallback } from "react";
import { QuoteData, QUOTES } from "../types";

export const useQuotes = () => {
  const [quote, setQuote] = useState<QuoteData>(QUOTES[0]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getRandomQuote = (): QuoteData => {
    let newQuote: QuoteData;
    do {
      newQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    } while (newQuote === quote && QUOTES.length > 1);
    return newQuote;
  };

  const fetchNewQuote = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      const newQuote = getRandomQuote();
      setQuote(newQuote);
      setIsLoading(false);
    }, 300);
  }, [quote]);

  return { quote, isLoading, error: null, fetchNewQuote };
};
