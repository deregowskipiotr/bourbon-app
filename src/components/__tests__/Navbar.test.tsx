import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../Navbar";

describe("Navbar Component", () => {
  test("renders all navigation links", () => {
    render(<Navbar isVintage={false} toggleTheme={function (): void {
      throw new Error("Function not implemented.");
    } } />);
    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);
    expect(screen.getByText(/storytelling/i)).toBeInTheDocument();
    expect(screen.getByText(/best'ie/i)).toBeInTheDocument();
    // add other actual links here
  });

  test("mobile menu toggle works", () => {
    render(<Navbar isVintage={false} toggleTheme={function (): void {
      throw new Error("Function not implemented.");
    } } />);
    const toggleButton = screen.getByRole("button", { name: /menu/i });

    // Initial state - aria-expanded false (example)
    expect(toggleButton).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(toggleButton);

    // After toggle - aria-expanded true
    expect(toggleButton).toHaveAttribute("aria-expanded", "true");

    // Or if you check particular menu class, update accordingly.

    expect(screen.getByText(/storytelling/i)).toBeInTheDocument();

  });
});
