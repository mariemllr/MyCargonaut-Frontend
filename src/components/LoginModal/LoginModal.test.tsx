import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import LoginModal from "./LoginModal";
import { UserState } from "../../reducer/user";
import { MemoryRouter } from "react-router-dom";

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
const store = mockStore(initialState);

describe("LoginModal", () => {
  it("renders the modal correctly when open", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginModal open={true} onClose={jest.fn()} onRegister={jest.fn()} />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText("Anmeldung")).toBeInTheDocument();
  });

  it("does not render the modal when not open", () => {
    const { queryByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginModal open={false} onClose={jest.fn()} onRegister={jest.fn()} />
        </MemoryRouter>
      </Provider>
    );
    expect(queryByText("Anmeldung")).toBeNull();
  });

  it("calls onClose when the close button is clicked", () => {
    const onClose = jest.fn();
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginModal open={true} onClose={onClose} onRegister={jest.fn()} />
        </MemoryRouter>
      </Provider>
    );
    fireEvent.click(screen.getByLabelText("close"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
