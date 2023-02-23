import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Checkout from "../components/Checkout";

const MockCheckout = ({addedItems}) => {
    return (
        <BrowserRouter>
            <Checkout addedItems={addedItems} />
        </BrowserRouter>);
}


it("should display message if cart empty", () => {
const addedItems = [];
    render(<MockCheckout addedItems={addedItems} />);
    
    const divElement = screen.getByTestId("message-empty");

    expect(divElement).toBeVisible();
});

it("should display list if cart not empty", () => {
    const addedItems = [{ id: 1, url: "", name: "mock 1"}];
    render(<MockCheckout addedItems={addedItems} />);
    
    const listElement = screen.getByRole("list");

    expect(listElement).toBeVisible();
});