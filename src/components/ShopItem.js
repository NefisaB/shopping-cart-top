const ShopItem = ({item, handleSingleAddItem}) => {
    return (
        <div className="card">
            <img src={item.url} alt={item.url} />
            <h3>{item.name}</h3>
            <p>{item.price} €</p>
            <button onClick={(e) => handleSingleAddItem(e, item.id)} >ADD</button>
        </div>
     );
}
 
export default ShopItem;