import React from "react";
import Quote from "./Quote";

function Exercise5() {
  return (
    <section className="exercise">
      <Quote
        author="Nelson Mandela"
        text="It always seems impossible until it’s done."
        date="2001"
      />
      <Quote
        author="Yoda"
        text="Do. Or do not. There is no try."
        date="A long time ago"
      />
      <Quote author="Bugs Bunny" text="What's up, doc?" />
    </section>
  );
}

export default Exercise5;
