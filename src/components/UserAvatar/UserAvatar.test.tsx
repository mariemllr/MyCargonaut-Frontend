import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import UserAvatar from "./UserAvatar";

describe("UserAvatar Component", () => {
  it("renders correctly", () => {
    const mockOnChange = jest.fn();
    render(
      <UserAvatar
        lastName="Doe"
        image="https://example.com/avatar.jpg"
        onChange={mockOnChange}
      />
    );
    expect(screen.getByAltText("Doe")).toBeInTheDocument();
    expect(screen.getByText("Bild auswählen")).toBeInTheDocument();
  });

  it("triggers onChange when a file is selected", () => {
    const mockOnChange = jest.fn();
    const file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });

    render(<UserAvatar onChange={mockOnChange} />);

    const input = screen.getByLabelText("Bild auswählen");
    fireEvent.change(input, { target: { files: [file] } });

    expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object));
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
