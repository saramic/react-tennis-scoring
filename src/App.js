import React, { useState, useEffect } from "react";
import "./App.scss";

const SCORES = ["love", 15, 30, 40];

function App() {
  const [score, setScore] = useState("love all");
  const [serverScore, setServerScore] = useState(0);

  const handleClick = () => {
    setServerScore(serverScore + 1);
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
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={handleClick}
            data-testid="server-button"
          >
            Server
          </button>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-primary btn-block"
            data-testid="receiver-button"
          >
            Receiver
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
