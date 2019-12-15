import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders the score as well as server and receiver buttons", () => {
  const { getByTestId } = render(<App />);
  const scoreElement = getByTestId("score");
  expect(scoreElement.textContent).toEqual("love all");
  expect(getByTestId("server-button").textContent).toEqual("Server");
  expect(getByTestId("receiver-button").textContent).toEqual("Receiver");
});

test("clicking server scores goes from love all, 15, 30, 40 love", () => {
  const { getByTestId } = render(<App />);
  const scoreElement = getByTestId("score");
  expect(scoreElement.textContent).toEqual("love all");
  fireEvent.click(getByTestId("server-button"));
  expect(scoreElement.textContent).toEqual("15 love");
  fireEvent.click(getByTestId("server-button"));
  expect(scoreElement.textContent).toEqual("30 love");
  fireEvent.click(getByTestId("server-button"));
  expect(scoreElement.textContent).toEqual("40 love");
  fireEvent.click(getByTestId("server-button"));
  expect(scoreElement.textContent).toEqual("Game Server");
});

test("clicking receiver scores goes from love all, 15, 30, 40 love", () => {
  const { getByTestId } = render(<App />);
  const scoreElement = getByTestId("score");
  expect(scoreElement.textContent).toEqual("love all");
  fireEvent.click(getByTestId("receiver-button"));
  expect(scoreElement.textContent).toEqual("love 15");
  fireEvent.click(getByTestId("receiver-button"));
  expect(scoreElement.textContent).toEqual("love 30");
  fireEvent.click(getByTestId("receiver-button"));
  expect(scoreElement.textContent).toEqual("love 40");
  fireEvent.click(getByTestId("receiver-button"));
  expect(scoreElement.textContent).toEqual("Game Server");
});
