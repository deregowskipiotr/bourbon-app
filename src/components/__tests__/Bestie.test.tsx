import { render, screen, fireEvent } from "@testing-library/react";
import Bestie from "../Bestie";

describe("Bestie Component", () => {
  test("renders product title and description", () => {
    render(<Bestie />);
    expect(
      screen.getByRole("heading", { name: /Best'ie Bourbon/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Born from the heart of Kentucky’s limestone/i)
    ).toBeInTheDocument();
  });

  test("tooltip appears on quote hover and focus", () => {
    render(<Bestie />);
    const quote = screen.getByText(/Perfect bourbon isn’t made, it’s earned/i);

    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();

    fireEvent.mouseEnter(quote);
    expect(screen.getByRole("tooltip")).toBeInTheDocument();

    fireEvent.mouseLeave(quote);
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();

    fireEvent.focus(quote);
    expect(screen.getByRole("tooltip")).toBeInTheDocument();

    fireEvent.blur(quote);
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });
});
