import React, { useState, useEffect } from "react";
import "./App.scss";
import Player from "./components/Player/Player";

const SCORES = ["love", 15, 30, 40];

function App() {
  const [score, setScore] = useState("love all");
  const [serverScore, setServerScore] = useState(0);
  const [receiverScore, setReceiverScore] = useState(0);

  const handleServerClick = () => {
    setServerScore(serverScore + 1);
  };

  const handleReceiverClick = () => {
    setReceiverScore(receiverScore + 1);
  };

  useEffect(() => {
    if (SCORES[serverScore] === SCORES[0]) {
      setScore(`${SCORES[serverScore]} all`);
    } else if (serverScore > 3) {
      setScore("Game Server");
    } else {
      setScore(`${SCORES[serverScore]} ${SCORES[0]}`);
    }
  }, [serverScore]);

  useEffect(() => {
    if (SCORES[receiverScore] === SCORES[0]) {
      setScore(`${SCORES[receiverScore]} all`);
    } else if (receiverScore > 3) {
      setScore("Game Receiver");
    } else {
      setScore(`${SCORES[0]} ${SCORES[receiverScore]}`);
    }
  }, [receiverScore]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 mt-3 text-center" style={{ fontSize: "3em" }}>
          <div data-testid="score">{score}</div>
        </div>
      </div>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-2">
          <Player
            dataTestId="server-button"
            name="Server"
            score={handleServerClick}
          />
        </div>
        <div className="col-2">
          <Player
            dataTestId="receiver-button"
            name="Receiver"
            score={handleReceiverClick}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
