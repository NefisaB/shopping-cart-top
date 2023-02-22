const ShopItem = ({item}) => {
    return (
        <div className="card">
            <img src={item.url} alt={item.url} />
            <h3>{item.name}</h3>
            <p>{item.price} €</p>

        </div>
     );
}
 
export default ShopItem;