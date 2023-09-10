import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Evaluation from "./Evaluation";

jest.mock("@mui/material/Rating", () => {
  return jest.fn((props) => {
    return <div data-testid="mock-rating" {...props}></div>;
  });
});

describe("Evaluation Component", () => {
  it("renders correctly", () => {
    render(<Evaluation value={4} name="Quality" />);
    expect(screen.getByText("Quality")).toBeInTheDocument();
  });

  it("passes the correct value to the Rating component", () => {
    render(<Evaluation value={4} name="Quality" />);
    const rating = screen.getByTestId("mock-rating");
    expect(rating).toHaveAttribute("value", "4");
  });

  it("renders multiple instances correctly", () => {
    render(
      <>
        <Evaluation value={4} name="Quality" />
        <Evaluation value={3} name="Speed" />
      </>
    );

    expect(screen.getByText("Quality")).toBeInTheDocument();
    expect(screen.getByText("Speed")).toBeInTheDocument();
  });
});
