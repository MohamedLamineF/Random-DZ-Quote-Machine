import React from "react";
import x from "/x.png";
import butterfly from "/butterfly.png";
import { QuoteData } from "../types";

interface QuoteContainerProps {
  quote: QuoteData;
  isLoading?: boolean;
  onNewQuote?: () => void;
}

const QuoteContainer: React.FC<QuoteContainerProps> = ({
  quote,
  isLoading,
  onNewQuote,
}) => {
  const tweetQuote = () => {
    const tweetText = encodeURIComponent(`${quote.content} ~${quote.author}`);
    return `htpps://twitter.com/intent/tweet?text=${tweetText}`;
  };
  const blueSkyQuote = () => {
    const skeetText = encodeURIComponent(`${quote.content} ~${quote.author}`);
    return `htpps://bluesky.com/intent/skeet?text=${skeetText}`;
  };

  const buttonClass = `bg-transparent hover:bg-white/10 text-white px-4 py-2 rounded-lg flex items-center transition-all duration-300 border border-white/20`;

  return (
    <div
      id="quote-box"
      className="bg-white/80 backdrop-blur-md rounded-xl shadow-2xl p-8 max-w-2xl w-full mx-auto transform hover:scale-[1.02] transition-all duration-500"
      style={{
        boxShadow: "0 0 40px rgba(0, 0, 0, 0.1)",
      }}
    >
      <blockquote>
        <div
          id="text"
          className={`flex gap-4 text-2xl font-serif transition-opacity duration-300 ${
            isLoading ? "opacity-50" : "opacity-100"
          }`}
        >
          <span className="text-4xl">"</span>
          {quote.content || "loading ..."}
        </div>

        <div
          id="author"
          className={`text-right italic text-gray-600 font-medium transition-opacity duration-300 ${
            isLoading ? "opacity-50" : "opacity-100"
          }`}
        >
          ~{quote.author || ""}
        </div>
      </blockquote>
      <div className="flex justify-between items-center mt-8">
        <div className="flex items-center gap-2">
          <a
            id="tweet-quote"
            role="button"
            className="flex items-center gap-2 px-4 py-1 border-2 border-[#3187ff] rounded-full hover:bg-blue-50"
            aria-label="Tweet this quote"
          >
            <img src={x} alt="bsky" width={20} />
            <span>Tweet</span>
          </a>
          <a
            id="Skeet-quote"
            role="button"
            className="flex items-center gap-2 px-4 py-1 border-2 border-[#3187ff] rounded-full hover:bg-blue-50"
            aria-label="Skeet this quote"
          >
            <img src={butterfly} alt="bsky" width={20} />
            <span>Skeet</span>
          </a>
        </div>
        <a
          id="new-quote"
          role="button"
          className="flex items-center gap-2 px-4 py-1 border-2 border-[#3187ff] rounded-full hover:bg-blue-50"
          aria-label="new Quote"
          onClick={onNewQuote}
        >
          New Quote
        </a>
      </div>
    </div>
  );
};

export default QuoteContainer;
