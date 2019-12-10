import React from "react";
import { render, fireEvent } from "@testing-library/react";
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

test("renders the Receiver button", () => {
  const { getByTestId } = render(<App />);
  const receiverButtonElement = getByTestId("receiver-button");
  expect(receiverButtonElement.textContent).toEqual("Receiver");
  // TODO how do we test it's a button? or just click it
});

test("clicking server scores goes from love all to 15 love", () => {
  const { getByTestId } = render(<App />);
  const scoreElement = getByTestId("score");
  expect(scoreElement.textContent).toEqual("love all");
  fireEvent.click(getByTestId("server-button"));
  expect(scoreElement.textContent).toEqual("15 love");
});
