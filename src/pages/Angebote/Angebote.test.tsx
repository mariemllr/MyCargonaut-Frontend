import { render, screen, waitFor } from "@testing-library/react";
import Angebote from "./Angebote";
import "@testing-library/jest-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("http://ec2-16-170-140-95.eu-north-1.compute.amazonaws.com:3000/offer", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          userId: 1,
          startlocation: "Berlin",
          endlocation: "Hamburg",
          date: new Date(),
        },
        // Add more mock data here
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Angebote Component", () => {
  test("renders Angebote component without crashing", () => {
    render(<Angebote />);
    expect(screen.getByText("Angebote")).toBeInTheDocument();
  });

  test("renders form fields correctly", () => {
    render(<Angebote />);
    expect(screen.getByLabelText("Startort")).toBeInTheDocument();
    expect(screen.getByLabelText("Zielort")).toBeInTheDocument();
    expect(screen.getByLabelText("Datum")).toBeInTheDocument();
    expect(screen.getByText("Suche")).toBeInTheDocument();
  });

  test("renders offers when API call is successful", async () => {
    render(<Angebote />);

    await waitFor(() => {
      expect(screen.getByText("Berlin")).toBeInTheDocument();
      expect(screen.getByText("Hamburg")).toBeInTheDocument();
    });
  });
});
