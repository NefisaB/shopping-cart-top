import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import data from "./data";

function App() {

  const [items, setItems] = useState(data);
  const [addedItems, setAddedItems] = useState([]);
  const [sumOfQuantities, setSumOfQuantities] = useState(0);
  const [sumOfValues, setSumOfValue] = useState(0);
  const [addQuantity, setAddQuantity] = useState(1);

  const navigate = useNavigate();

  const decrement = () => {
    if (addQuantity > 1) {
      setAddQuantity(prevState => prevState - 1);
    }
  }

  const increment = () => {
    setAddQuantity(prevState => prevState+1)
  }

  const addItemToCart = (id) => {
    let temp = { ...items[id - 1], addQuantity };
    const temp2 = addedItems.find(item => item.id === id);
    if (temp2) {
      temp = { ...temp, addQuantity: addQuantity + temp2.addQuantity };
      setAddedItems(prevState => prevState.map(item => item.id === id ? temp : item))
    } else {
      setAddedItems(prevState => [...prevState, temp]);
    } 
    setSumOfQuantities(prevState => prevState + addQuantity);
    setSumOfValue(prevState => prevState + addQuantity * Number(temp.price));
    setAddQuantity(1);
    navigate(-1);
  }

  const handleCartClick = () => {
    navigate("/checkout");
  }

  const decrementFromCart = (id) => {
    const temp = addedItems.find(el => el.id === id);
    if (temp.addQuantity === 1) {
      setAddedItems(prevState => prevState.filter(item => item.id !== id));
    } else {
      setAddedItems(prevState => prevState.map(item => item.id === id ? {...item, addQuantity: item.addQuantity -1} : item));
    }
    setSumOfQuantities(prevState => prevState - 1);
    setSumOfValue(prevState => prevState - temp.price);
  }

  const incrementFromCart = (id) => {
    const temp = addedItems.find(el => el.id === id);
    setAddedItems(prevState => prevState.map(item => item.id === id ? {...item, addQuantity: item.addQuantity +1} : item));
    setSumOfQuantities(prevState => prevState + 1);
    setSumOfValue(prevState => prevState + Number(temp.price));
  }

  const reset = () => {
    setAddedItems([]);
    setSumOfQuantities(0);
    setSumOfValue(0);
 //   navigate("/");
  }

  return (
    <div className="App">
      <Navbar />
      <div
        className="cart"
        onClick={handleCartClick} >
        <span>{sumOfQuantities}</span>
        <img src="../cart.png" alt="icon"/>
      </div>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop/*' element={<Shop
          items={items}
          increment={increment}
          decrement={decrement}
          addQuantity={addQuantity}
          addItemToCart={addItemToCart} />} />
        <Route path="/checkout" element={<Checkout
          addedItems={addedItems}
          sumOfValues={sumOfValues.toFixed(2)}
          incrementFromCart={incrementFromCart}
          decrementFromCart={decrementFromCart}
          reset={reset} />} />
      </Routes>
    </div>
  );
}

export default App;
