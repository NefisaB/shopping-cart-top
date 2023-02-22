import { Link, Route, Routes } from "react-router-dom";
import ShopItem from "./ShopItem";
import ShopItemPreview from "./ShopItemPreview";

const Shop = (props) => {

    const { items, increment, decrement, addItemToCart, addQuantity } = props;

    const itemsPreview = items.map(item => {
        return (
            <Link to={`/shop/${item.id}`} key={item.id}>
                <ShopItem item={item} />
            </Link>
        );
    });

    return (
        <main>
            <Routes>
                <Route path="/" element={<div className="items">{itemsPreview}</div>} />
                <Route path=':id' element={<ShopItemPreview
                    decrement={decrement}
                    increment={increment}
                    addQuantity={addQuantity}
                    addItemToCart={addItemToCart}
                />} />
            </Routes>
        </main>);
}
 
export default Shop;