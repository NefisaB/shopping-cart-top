import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import data from "./data";

function App() {

  const [items, setItems] = useState(data);



  return (
    <div className="App">
      <Navbar />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop items={items} /> } />
      </Routes>
    </div>
  );
}

export default App;
