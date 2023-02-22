import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";

const MockNavbar = () => {
    return (
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>);
}

it("should display 2 links after rendering", () => {
    render(<MockNavbar />);
    
    const linkElements = screen.getAllByRole("link");

    expect(linkElements.length).toBe(2);
});