import React, { useState, useEffect } from "react";
import "./App.css";

const SCORES = ["love", 15, 30, 40];

function App() {
  const [score, setScore] = useState("love all");
  const [serverScore, setServerScore] = useState(0);

  const handleClick = () => {
    setServerScore(serverScore + 1);
  };

  useEffect(() => {
    if(SCORES[serverScore] === SCORES[0]) {
      setScore(`${SCORES[serverScore]} all`)
    } else if (serverScore > 3){
      setScore(
        "Game Server"
      )
    } else {
      setScore(`${SCORES[serverScore]} ${SCORES[0]}`);
    }
  }, [serverScore]);

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
