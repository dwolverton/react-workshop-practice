import React, { useEffect, useState } from "react";
import Quote from "../Exercise5/Quote";

function QuoteList() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data);
      });
  }, []);

  return (
    <div className="QuoteList">
      <h2>Quote List From API</h2>
      {quotes.map((quote, i) => (
        <Quote
          key={i}
          author={quote.author}
          text={quote.text}
          date={quote.date}
        />
      ))}
    </div>
  );
}

export default QuoteList;
