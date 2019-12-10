import React, { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState("love all");
  const [serverScore, setServerScore] = useState(0);

  const scores = ["love", 15, 30, 40];

  const handleClick = () => {
    if (serverScore === 0) {
      setServerScore(serverScore + 1)
      setScore(`${scores[serverScore]} ${scores[0]}`);
    } else if (score === `${scores[1]} ${scores[0]}`) {
      setScore(`${scores[2]} ${scores[0]}`);
    } else {
      setScore(`${scores[3]} ${scores[0]}`);
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
