import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Contacto from './components/contacto';
import Footer from "./components/footer"
import { CarritoProvider } from './context/cartContext';
import Cart from './components/cart';
import Checkout from './components/checkout';


const App = () => {
  return (
    <CarritoProvider>
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/detalles/:id" element={<ItemDetailContainer />} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    </CarritoProvider>
  );
}

export default App;


