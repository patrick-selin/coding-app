import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import TestComponent from "./test-component";

describe("TestComponent", () => {
  it("generates a random number between 1 and 100", () => {
    const { getByText } = render(<TestComponent />);

    const button = getByText("Generate Random Number");
    fireEvent.click(button);

    const randomNumberText = getByText(/Random Number:/);
    const randomNumber = parseInt(
      randomNumberText.textContent?.split(": ")[1] ?? "0",
      10
    );

    expect(randomNumber).toBeGreaterThanOrEqual(1);
    expect(randomNumber).toBeLessThanOrEqual(100);
  });
});
