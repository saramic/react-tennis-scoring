import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Player from "./Player";

test("renders the player component with name", () => {
  const { getByTestId } = render(
    <Player dataTestId="player-button" name="Player X" />
  );
  expect(getByTestId("player-button").textContent).toEqual("Player X");
});

test("clicking fires the score function", () => {
  const scoreFunction = jest.fn();

  const { getByTestId } = render(
    <Player dataTestId="player-button" score={scoreFunction} />
  );

  expect(scoreFunction).toHaveBeenCalledTimes(0);
  fireEvent.click(getByTestId("player-button"));
  expect(scoreFunction).toHaveBeenCalledTimes(1);
});
