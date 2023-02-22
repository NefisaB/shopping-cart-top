import ShopItem from "./ShopItem";

const Shop = ({ items }) => {

    const itemsPreview = items.map(item => {
        return (
            <ShopItem item={item} key={item.id} />
        );
    })
    

    return (
        <main>
            <div className="items">
                {itemsPreview}
            </div>     
        </main>);
}
 
export default Shop;