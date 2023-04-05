import { render, screen } from "@testing-library/react";
import Hero from "./";

describe("Hero", () => {
  it("should render the correct title", () => {
    render(<Hero />);
    const title = screen.getByText("Hero");
    expect(title).toBeInTheDocument();
  });
});
