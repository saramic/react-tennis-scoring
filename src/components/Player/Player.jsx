import React from "react";

export default function Player({ dataTestId, name, score }) {
  return (
    <button
      className="btn btn-primary btn-block"
      data-testid={dataTestId}
      onClick={score}
    >
      {name}
    </button>
  );
}
