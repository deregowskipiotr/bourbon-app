import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header Component", () => {
  test("renders title and subtitle", () => {
    render(<Header />);
    expect(
      screen.getByRole("heading", { name: /hello, bourbon enthusiasts!/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/sip happens - good taste starts here!/i)
    ).toBeInTheDocument();
  });

  test("renders explore button", () => {
    render(<Header />);
    const button = screen.getByRole("button", { name: /explore collection/i });
    expect(button).toBeInTheDocument();
  });
});
