import Navbar from "../components/navbar";
import { render } from "@testing-library/react";
import { getTestLayout } from "../utils/lib/test.wrappers";
import testHelpers from "../utils/lib/test.helpers";

describe("Navbar Test", () => {
  it("should render the navbar component", () => {
    const navbarElement = getTestLayout(<Navbar />, "react-router");
    render(navbarElement);

    expect(navbarElement).not.toBeNull();
  });

  it("should render the navbar logo", () => {
    const navbarElement = getTestLayout(<Navbar />, "react-router");
    render(navbarElement);

    const navbarLogo = testHelpers.getElementByText(/s-blog/i);

    expect(navbarLogo).toBeInTheDocument();
    expect(navbarLogo.textContent).toBe("S-Blog");
  });

  it("should show a yellow background for the navbar", () => {
    const navbarElement = getTestLayout(<Navbar />, "react-router");
    render(navbarElement);

    const navbar = testHelpers.getElementByRole("banner");
    expect(navbar).toHaveClass("bg-orange-100");
  });

  it("should navigate to the home page when the logo is clicked", () => {
    const navbarElement = getTestLayout(<Navbar />, "react-router");
    render(navbarElement);

    const navbarLogo = testHelpers.getElementByText(/s-blog/i);

    testHelpers.clickElement(navbarLogo);
    expect(window.location.pathname).toBe("/");
  });
});
