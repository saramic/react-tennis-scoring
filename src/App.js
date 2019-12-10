import React, { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState("love all");

  const handleClick = () => {
    if (score === "love all") {
      setScore("15 love");
    } else {
      setScore("30 love");
    }
  };

  return (
    <div>
      <div data-testid="score">{score}</div>
      <button onClick={handleClick} data-testid="server-button">
        Server
      </button>
      <button data-testid="receiver-button">Receiver</button>
    </div>
  );
}

export default App;
