import { MatcherOptions, fireEvent, screen } from "@testing-library/react";

class TestHelpers {
  // Getters
  public getElementByText(text: string, options?: MatcherOptions) {
    return screen.getByText(text, options);
  }

  public getElementByTestID(id: string, options?: MatcherOptions) {
    return screen.getByTestId(id, options);
  }

  public getElementByRole(role: string, options?: MatcherOptions) {
    return screen.getByRole(role, options);
  }

  public getInputByPlaceholderText(text: string, options?: MatcherOptions) {
    return screen.getByPlaceholderText(text, options);
  }

  public getElementByID(id: string) {
    return document.getElementById(id);
  }

  // Actions
  public clickElement(element: HTMLElement | HTMLTextAreaElement) {
    return fireEvent.click(element);
  }

  public onChange(element: HTMLElement, value: string) {
    return fireEvent.change(element, { target: { value } });
  }
}

const testHelpers = new TestHelpers();
export default testHelpers;
