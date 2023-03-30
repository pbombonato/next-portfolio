import Header from "./";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
  it("should render", () => {
    render(<Header />);

    const text = screen.getByText("Header");
    
    expect(text).toBeInTheDocument();
  });
});
