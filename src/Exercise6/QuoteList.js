import React from "react";
import Quote from "../Exercise5/Quote";

function QuoteList() {
  const quotes = [
    {
      author: "Nelson Mandela",
      text: "It always seems impossible until it’s done.",
      date: "2001"
    },
    {
      author: "Yoda",
      text: "Do. Or do not. There is no try.",
      date: "A long time ago"
    },
    { author: "Bugs Bunny", text: "What's up, doc?" }
  ];

  return (
    <div className="QuoteList">
      <h2>Quote List</h2>
      {quotes.map((quote) => (
        <Quote author={quote.author} text={quote.text} date={quote.date} />
      ))}
    </div>
  );
}

export default QuoteList;
