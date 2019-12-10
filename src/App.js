import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <div data-testid="score">love all</div>
      <button data-testid="server-button">Server</button>
      <button data-testid="receiver-button">Receiver</button>
    </div>
  );
}

export default App;
