import { render, screen } from "@testing-library/react";
import ShopItem from "../components/ShopItem";

const mockItem = {
    id: 1,
    name: "My Element",
    url: "",
    price: ""
};

it("should render card element", () => {
    render(<ShopItem item={mockItem} />);

    const cardElement = screen.getByText(/My element/i);

    expect(cardElement).toBeInTheDocument();
});