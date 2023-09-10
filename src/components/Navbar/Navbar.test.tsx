import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { ROUTES } from "../../resources/route-constants";

describe("Navbar", () => {
  it("renders all buttons correctly", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Profil")).toBeInTheDocument();
    expect(screen.getByText("Fahrzeuge")).toBeInTheDocument();
    expect(screen.getByText("Eintrag anlegen")).toBeInTheDocument();
    expect(screen.getByText("Chat")).toBeInTheDocument();
  });

  it("navigates to the correct routes when buttons are clicked", () => {
    let testLocation: any;

    const TestComponent = () => {
      testLocation = useLocation();
      return null;
    };

    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="*" element={<TestComponent />} />
        </Routes>
        <Navbar />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Home"));
    expect(testLocation.pathname).toBe(ROUTES.HOMEPAGE_ROUTE);

    fireEvent.click(screen.getByText("Profil"));
    expect(testLocation.pathname).toBe(ROUTES.PROFILEPAGE_ROUTE);

    fireEvent.click(screen.getByText("Fahrzeuge"));
    expect(testLocation.pathname).toBe(ROUTES.FAHRZEUGVERWALTUNG_ROUTE);

    fireEvent.click(screen.getByText("Eintrag anlegen"));
    expect(testLocation.pathname).toBe(ROUTES.FAHRTEN_ANLAGE_ROUTE);
  });
});
