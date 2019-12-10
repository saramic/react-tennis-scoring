import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders the score", () => {
  const { getByTestId } = render(<App />);
  const scoreElement = getByTestId("score");
  expect(scoreElement.textContent).toEqual("love all");
});

test("renders the Server button", () => {
  const { getByTestId } = render(<App />);
  const serverButtonElement = getByTestId("server-button");
  expect(serverButtonElement.textContent).toEqual("Server");
  // TODO how do we test it's a button? or just click it
});
