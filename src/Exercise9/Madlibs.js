import React, { useState } from "react";

function Madlibs() {
  const [noun, setNoun] = useState("");
  const [adj, setAdj] = useState("");
  const [showStory, setShowStory] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setShowStory((prev) => !prev);
  }

  return (
    <div className="Madlibs">
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="Madlibs__adj">Adj: </label>
          <input
            id="Madlibs__adj"
            value={adj}
            onChange={(e) => setAdj(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="Madlibs__noun">Noun: </label>
          <input
            id="Madlibs__noun"
            value={noun}
            onChange={(e) => setNoun(e.target.value)}
          />
        </p>
        <p>
          <button type="submit">Show Story</button>
        </p>
      </form>
      {showStory && (
        <div className="Madlibs__story">
          <h3>Story</h3>
          <p>
            I ordered the {adj} fish, but all I got was this outrageous {noun}!
          </p>
        </div>
      )}
    </div>
  );
}

export default Madlibs;
