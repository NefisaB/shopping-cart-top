import { useParams } from "react-router-dom";
import data from "../data";


const ShopItemPreview = (props) => {

    const { decrement, increment, addQuantity, addItemToCart } = props;

    const { id } = useParams();

    const item = data[id-1] || null;


    return (
        <div>
            {
                item &&
                <div className="preview">
                        <div className="preview-card">
                            <img src={item.url} alt={item.url} />
                            <h2>{item.name}</h2>
                            <p>{item.price} €</p>
                        </div>
                        <div className="preview-buttons">
                            <button onClick={decrement} >-</button>
                            <span>{addQuantity}</span>
                            <button onClick={increment}>+</button>
                            <button className="add-btn" onClick={() => addItemToCart(item.id)}>Add To Cart</button>
                        </div>
                    </div>
            }
            {
                !item && 
                <p>Item cannot be found...</p>
            }
            
        </div>);
}
 
export default ShopItemPreview;