import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

test("renders the logo", () => {
  render(<HomePage />);
  const logoElement = screen.getByAltText("Logo");
  expect(logoElement).toBeInTheDocument();
});

test("renders the Angebote button", () => {
  render(<HomePage />);
  const angeboteButtonElement = screen.getByText("Angebote");
  expect(angeboteButtonElement).toBeInTheDocument();
});

test("renders the Gesuche button", () => {
  render(<HomePage />);
  const gesucheButtonElement = screen.getByText("Gesuche");
  expect(gesucheButtonElement).toBeInTheDocument();
});

test("renders the Anmelden button", () => {
  render(<HomePage />);
  const anmeldenButtonElement = screen.getByText("Anmelden");
  expect(anmeldenButtonElement).toBeInTheDocument();
});

test("renders the Registrieren button", () => {
  render(<HomePage />);
  const registrierenButtonElement = screen.getByText("Registrieren");
  expect(registrierenButtonElement).toBeInTheDocument();
});
