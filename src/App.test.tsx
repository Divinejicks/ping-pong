import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import store from "./store";

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByRole("heading")).toHaveTextContent(/Play Ping Pong/);
  expect(screen.getByRole("table")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Play" })).toBeEnabled();
  expect(screen.getByRole("img")).toBeInTheDocument();
});
