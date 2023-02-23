import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ShopItemPreview from "../components/ShopItemPreview";
import App from "../App";

it("should display text if item not found", ()=>{
    render(<ShopItemPreview />);

    const paragraphElement = screen.getByText(/item cannot be found.../i);

    expect(paragraphElement).toBeVisible();
});

it("should display 'Red Tulips' if id=1 passed", async () => {
    render(
        <MemoryRouter initialEntries={["/shop/1"]}>
                 <App />
        </MemoryRouter>
    );

    const headingElement = screen.getByRole("heading");

    expect(headingElement.textContent).toBe("Red Tulips");
});

it("should have span element and 3 buttons element when id given", async () => {
    render(
        <MemoryRouter initialEntries={["/shop/1"]}>
             <App />
        </MemoryRouter>
    );

    const spanElement = screen.getByTestId("quantity");
    const buttons = screen.getAllByRole("button");

    fireEvent.click(buttons[0]);

    expect(spanElement).toBeInTheDocument();
    expect(buttons.length).toBe(3);
});

it("should increment quantity when button clicked and id given", async () => {
    render(
        <MemoryRouter initialEntries={["/shop/1"]}>
             <App />
        </MemoryRouter>
    );

    const spanElement = screen.getByTestId("quantity");
    const buttons = screen.getAllByRole("button");

    fireEvent.click(buttons[1]);

    expect(spanElement.textContent).toBe("2");
});

it("should not decrement quantity if it's 1 when button clicked and id given", async () => {
    render(
        <MemoryRouter initialEntries={["/shop/1"]}>
             <App />
        </MemoryRouter>
    );

    const spanElement = screen.getByTestId("quantity");
    const buttons = screen.getAllByRole("button");

    fireEvent.click(buttons[0]);

    expect(spanElement.textContent).toBe("1");
});

it("should decrement quantity when button clicked and id given", async () => {
    render(
        <MemoryRouter initialEntries={["/shop/1"]}>
             <App />
        </MemoryRouter>
    );

    const spanElement = screen.getByTestId("quantity");
    const buttons = screen.getAllByRole("button");

    fireEvent.click(buttons[1]);
    fireEvent.click(buttons[1]);
    expect(spanElement.textContent).toBe("3");

    fireEvent.click(buttons[0]);
    expect(spanElement.textContent).toBe("2")
});