import Header from "./";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
  it("should render the correct title", () => {
    render(<Header />);
    const title = screen.getByText("Pablo Bombonato");
    expect(title).toBeInTheDocument();
  });

  it("should render the correct links", () => {
    render(<Header />);

    const solutionsLink = screen.getByText("Soluções");
    expect(solutionsLink).toBeInTheDocument();

    const projectsLink = screen.getByText("Projetos");
    expect(projectsLink).toBeInTheDocument();

    const letsTalkLink = screen.getByText("Vamos conversar");
    expect(letsTalkLink).toBeInTheDocument();
  });
});
