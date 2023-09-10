import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import RegisterModal from "./RegisterModal";
import { UserState } from "../../reducer/user";
import "@testing-library/jest-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { AxiosError } from "axios";

const initialState: UserState = {
  firstName: undefined,
  lastName: undefined,
  email: undefined,
  phone: undefined,
  image: undefined,
  id: undefined,
  password: undefined,
  isLoggedIn: false,
  smoker: false,
  note: undefined,
  birthday: undefined,
  rideCount: 0,
};

const mockStore = configureMockStore();
const store = mockStore({ user: initialState });
jest.mock("axios", () => ({
  create: jest.fn(() => ({
    post: jest.fn(() => Promise.reject(new Error("Mock error"))),
  })),
  AxiosError: class extends Error {},
}));

describe("RegisterModal", () => {
  const mockOnClose = jest.fn();
  const mockOnLogin = jest.fn();
  const mockOnRegisterSuccess = jest.fn();

  beforeEach(() => {
    render(
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Provider store={store}>
          <RegisterModal
            open={true}
            onClose={mockOnClose}
            onLogin={mockOnLogin}
            onRegisterSuccess={mockOnRegisterSuccess}
          />
        </Provider>
      </LocalizationProvider>
    );
  });

  it("renders the component correctly", async () => {
    await screen.findByText("Registrierung");

    expect(screen.getByText("Registrierung")).toBeInTheDocument();
    expect(screen.getByText("Vorname")).toBeInTheDocument();
    expect(screen.getByText("Nachname")).toBeInTheDocument();
  });

  it("calls handleSubmit when submit button is clicked", async () => {
    await screen.findByText("Registrierung");

    fireEvent.click(screen.getByText("Registrierung abschließen"));
  });
});
