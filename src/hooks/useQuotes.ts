import { useState, useCallback, useEffect } from "react";
import { QuoteData, QUOTES } from "../types";

export const useQuotes = () => {
  const [quote, setQuote] = useState<QuoteData>(QUOTES[0]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
};
