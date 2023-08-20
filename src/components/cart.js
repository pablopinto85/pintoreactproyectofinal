import React from 'react';
import { useCarrito } from '../context/cartContext';
import '../App.css'; 
import { Link } from 'react-router-dom';

const Cart = () => {
  const { carrito, eliminarProducto, vaciarCarrito } = useCarrito();

  const calcularTotal = () => {
    return carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
  };

  const agruparProductos = () => {
    const productosAgrupados = {};
    
    carrito.forEach((producto) => {
      if (productosAgrupados[producto.id]) {
        productosAgrupados[producto.id].cantidad += producto.cantidad;
      } else {
        productosAgrupados[producto.id] = { ...producto };
      }
    });
    
    return Object.values(productosAgrupados);
  };

  return (
    <div>
      <h2 className='titulo'>Carrito de Compras</h2>
      <table className='table tablita'>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {agruparProductos().map((producto) => (
            <tr key={producto.id}>
              <td>{producto.nombre}</td>
              <td>{producto.cantidad}</td>
              <td>${producto.precio * producto.cantidad}</td>
              <td>
                <button className="btn btnDetail btn-primary" onClick={() => eliminarProducto(producto.id)}>Eliminar Producto</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total de la Compra: ${calcularTotal()}</p>
      <div className="container text-center">
        <button className="btn btnDetail btn-primary" onClick={vaciarCarrito}>Vaciar Carrito</button>
        <Link to="/checkout" ><button className="btn btnDetail btn-primary">Confirmar Compra</button></Link>
        <div style={{ marginBottom: '100px' }} />
      </div>
    </div>
  );
};

export default Cart;



