'use client';

import { useState, useEffect } from 'react';

const QuoteBox = () => {
  const [quotesData, setQuotesData] = useState(null);
  const [currentQuote, setCurrentQuote] = useState('');
  const [currentAuthor, setCurrentAuthor] = useState('');
  const [quoteLoading, setQuoteLoading] = useState(true);

  // Fetch quotes data
  useEffect(() => {
    const getQuotes = async () => {
      try {
        const response = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
        const data = await response.json();
        setQuotesData(data);
        setQuoteLoading(false);
      } catch (error) {
        console.error('Error fetching quotes:', error);
        setQuoteLoading(false);
      }
    };
    getQuotes();
  }, []);

  // Get a random quote
  const getRandomQuote = () => {
    if (quotesData && quotesData.quotes && quotesData.quotes.length > 0) {
      const randomQuote = quotesData.quotes[Math.floor(Math.random() * quotesData.quotes.length)];
      setCurrentQuote(randomQuote.quote);
      setCurrentAuthor(randomQuote.author);
    } else {
      console.error('Quotes data is not available or empty');
    }
  };

  // Run getRandomQuote when quotesData is loaded
  useEffect(() => {
    if (quotesData && !quoteLoading) {
      getRandomQuote();
    }
  }, [quotesData, quoteLoading]);

  return (
    <div id="quote-box" className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-lg mx-auto text-center font-sans mt-32">
      <p id="text" className="text-2xl italic text-gray-800 mb-6">{currentQuote}</p>
      <p id="author" className="text-xl text-gray-600 mb-8">{currentAuthor}</p>
      <button
        id="new-quote"
        onClick={getRandomQuote}
        className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out mb-4"
      >
        New Quote
      </button>
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
      >
        Tweet Quote
      </a>
    </div>
  );
};

export default QuoteBox;
