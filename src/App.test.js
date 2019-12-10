import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders the score", () => {
  const { getByTestId } = render(<App />);
  const scoreElement = getByTestId("score");
  expect(scoreElement.textContent).toEqual("love all");
});
