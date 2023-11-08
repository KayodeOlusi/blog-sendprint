import App from "../App";
import { render } from "@testing-library/react";
import testHelpers from "../utils/lib/test.helpers";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = testHelpers.getElementByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
