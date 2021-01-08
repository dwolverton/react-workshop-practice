import React from "react";
import Exercise1 from "./Exercise1/Exercise1";
import Exercise2 from "./Exercise2/Exercise2";
import Exercise3 from "./Exercise3/Exercise3";
import Exercise5 from "./Exercise5/Exercise5";
import Exercise6 from "./Exercise6/Exercise6";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Exercise1 />
      <Exercise2 />
      <Exercise3 />
      <Exercise5 />
      <Exercise6 />
    </div>
  );
}