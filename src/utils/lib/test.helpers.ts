import {
  screen,
  fireEvent,
  MatcherOptions,
  ByRoleMatcher,
  Matcher,
  act,
} from "@testing-library/react";
import ReactTestUtils from "react-dom/test-utils";

class TestHelpers {
  // Getters
  public getElementByText(text: string | RegExp, options?: MatcherOptions) {
    return screen.getByText(text, options);
  }

  public getElementByTestID(id: string, options?: MatcherOptions) {
    return screen.getByTestId(id, options);
  }

  public getElementByRole(role: ByRoleMatcher, options?: MatcherOptions) {
    return screen.getByRole(role, options);
  }

  public getInputByPlaceholderText(text: Matcher, options?: MatcherOptions) {
    return screen.getByPlaceholderText(text, options);
  }

  public getElementByID(id: string) {
    return document.getElementById(id);
  }

  // Actions
  public clickElement(element: HTMLElement) {
    return fireEvent.click(element);
  }

  public onChange(element: HTMLElement, value: string) {
    return fireEvent.change(element, { target: { value } });
  }

  public onSubmit(element: HTMLFormElement) {
    return fireEvent.submit(element);
  }

  public submitAndUpdate(
    element: HTMLFormElement,
    options?: ReactTestUtils.SyntheticEventData
  ) {
    return act(() => ReactTestUtils.Simulate.submit(element, options));
  }
}

const testHelpers = new TestHelpers();
export default testHelpers;
