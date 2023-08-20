import React, { createContext, useContext, useState, useEffect } from 'react';

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

 
  useEffect(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      setCarrito(JSON.parse(carritoGuardado));
    }
  }, []);

  const actualizarCarritoLocalStorage = (nuevoCarrito) => {
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
  };

  const agregarAlCarrito = (producto) => {
    const nuevoCarrito = [...carrito, producto];
    setCarrito(nuevoCarrito);
    actualizarCarritoLocalStorage(nuevoCarrito);
  };

  const eliminarProducto = (id) => {
    const nuevoCarrito = carrito.filter((producto) => producto.id !== id);
    setCarrito(nuevoCarrito);
    actualizarCarritoLocalStorage(nuevoCarrito);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    actualizarCarritoLocalStorage([]);
  };

  const value = {
    carrito,
    agregarAlCarrito,
    eliminarProducto,
    vaciarCarrito,
  };

  return (
    <CarritoContext.Provider value={value}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  return useContext(CarritoContext);
};
