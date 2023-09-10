import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import ProfileInformation from "./ProfileInformation";
import { UserState } from "../../../reducer/user";
import rest from "../../../utility/rest";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

jest.mock("../../../utility/rest");

const mockStore = configureMockStore();
const initialState: UserState = {};
const store = mockStore({ user: initialState });

describe("ProfileInformation", () => {
  it("renders the component correctly", () => {
    render(
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Provider store={store}>
          <ProfileInformation user={initialState} />
        </Provider>
      </LocalizationProvider>
    );
    expect(screen.getByText("Vorname:")).toBeInTheDocument();
  });

  it("toggles editing state when Edit button is clicked", () => {
    render(
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Provider store={store}>
          <ProfileInformation user={initialState} />
        </Provider>
      </LocalizationProvider>
    );
    fireEvent.click(screen.getByText("Edit"));
    expect(screen.getByLabelText("Geburtstag")).toBeInTheDocument();
  });

  it("saves changes and makes API call when Save button is clicked", async () => {
    (rest.put as jest.Mock).mockResolvedValue({ data: {} });
    render(
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Provider store={store}>
          <ProfileInformation user={initialState} />
        </Provider>
      </LocalizationProvider>
    );
    fireEvent.click(screen.getByText("Edit"));
    fireEvent.click(screen.getByText("Save"));

    await waitFor(() => {
      expect(rest.put).toHaveBeenCalled();
    });
  });

  it("changes input fields correctly", () => {
    render(
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Provider store={store}>
          <ProfileInformation user={initialState} />
        </Provider>
      </LocalizationProvider>
    );
    fireEvent.click(screen.getByText("Edit"));
    fireEvent.change(screen.getByLabelText("Geburtstag"), {
      target: { value: "2023-09-10" },
    });
  });
});
