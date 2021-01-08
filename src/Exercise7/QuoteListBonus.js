import React, { useEffect, useState } from "react";
import Quote from "../Exercise5/Quote";

function QuoteListBonus() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://dwolverton.github.io/juneteenth/public/api/quotes.json")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data.slice(0, 10));
      });
  }, []);

  return (
    <div className="QuoteListBonus">
      <h2>Quote List From API (Bonus)</h2>
      {quotes.map((quote, i) => (
        <Quote
          key={i}
          author={quote.source}
          text={quote.text.join(" ")}
          date={quote.date.exact || quote.date.year}
        />
      ))}
    </div>
  );
}

export default QuoteListBonus;
