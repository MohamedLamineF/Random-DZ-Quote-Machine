import React from "react";
import butterfly from "/butterfly.png";
import x from "/x.png";

interface QuoteContainerProps {
  textQuote: string;
  authorQuote: string;
  isLoading?: boolean;
  onNewQuote?: () => void;
}

const QuoteContainer: React.FC<QuoteContainerProps> = ({
  textQuote = "loading...",
  authorQuote = "unknown",
  isLoading = false,
  onNewQuote = () => {},
}) => {
  return (
    <div
      id="quote-box"
      className="bg-white shadow-sm rounded-lg p-8 max-w-2xl w-full mx-auto transform transition-all duration-300 hover:bg-gray-50"
    >
      <div
        id="text"
        className={`flex gap-4  text-2xl font-serif transition-opacity duration-300  ${
          isLoading ? "opacity-50" : "opacity-100"
        }`}
      >
        <span className="text-4xl">"</span>
        {textQuote || "loading..."}
      </div>

      <div
        id="author"
        className={`text-right italic text-gray-600 font-medium transition-opacity duration-300  ${
          isLoading ? "opacity-50" : "opacity-100"
        }`}
      >
        ~{authorQuote || "unknown"}
      </div>
      <div className="flex justify-between items-center mt-8">
        <div className="flex items-center gap-2">
          <a
            id="tweet-quote"
            role="button"
            className="flex items-center gap-2 px-4 py-2 border-2 border-[#3187ff] text-[#3187ff] rounded-lg hover:bg-blue-50"
            aria-label="Tweet this quote"
          >
            <img src={x} alt="bsky" width={20} />
            <span>Tweet</span>
          </a>
          <a
            id="Skeet-quote"
            role="button"
            className="flex items-center gap-2 px-4 py-2 border-2 border-[#3187ff] text-[#3187ff] rounded-lg hover:bg-blue-50"
            aria-label="Skeet this quote"
          >
            <img src={butterfly} alt="bsky" width={20} />
            <span>Skeet</span>
          </a>
        </div>
        <a
          id="new-quote"
          role="button"
          className="flex items-center gap-2 px-4 py-2 border-2 border-[#3187ff] text-[#3187ff] rounded-lg hover:bg-blue-50"
          aria-label="new Quote"
          onClick={() => onNewQuote()}
        >
          New Quote
        </a>
      </div>
    </div>
  );
};

export default QuoteContainer;
