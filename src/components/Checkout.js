import { Link } from "react-router-dom";

const Checkout = (props) => {

    const { addedItems, decrementFromCart, incrementFromCart, sumOfValues, reset } = props;

    const addedItemsList = addedItems.map(item => {
        return (
            <li key={item.id}>
                <div>
                    <img src={item.url} alt={item.url} />
                    {item.name}
                </div>
                <div className="list-buttons"> <button onClick={() => decrementFromCart(item.id)} >-</button>
                            <span>{item.addQuantity}</span>
                            <button onClick={()=>incrementFromCart(item.id)}>+</button></div></li>
        )
    })
    
    return (
        <div className="checkout">
            {addedItems.length > 0 && <div>
                <h2>Please review your order before purchasing:</h2>
                <ul> {addedItemsList}</ul>
                <p>Total Sum: {sumOfValues || 0} €</p>
                <button className="reset-button" onClick={reset}>Checkout</button>
            </div>}
            {addedItems.length === 0 && 
                <div>
                You haven't purchased anything yet... Go to our <Link to="/shop" >SHOP</Link></div>
                }
        </div>
      );
}
 
export default Checkout;