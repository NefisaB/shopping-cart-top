import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

it("should display heading", () => {
    render(<Home />);

    const headingElement = screen.getByRole("heading");

    expect(headingElement.textContent).toBe("Flower Shop");
});

it("should display paragraph", () => {
    render(<Home />);

    const paragraphElement = screen.getByTestId("description");

    expect(paragraphElement).toBeVisible();
})