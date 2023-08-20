import React, { useState } from 'react';
import '../App.css'; 
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import ItemCounter from './ItemCounter';
import { useCarrito } from '../context/cartContext';
import { Link } from 'react-router-dom';

export const ItemDetails = ({ data, cantidad }) => {
    const [show, setShow] = useState(false);

  const { agregarAlCarrito } = useCarrito(); 
  function agregarAlCarro (id, cantidad) {
    const productoAgregado = {
      id: id,
      cantidad: cantidad,
      nombre: data.nombre, 
      precio: data.precio, 
    };

    agregarAlCarrito(productoAgregado);

    Swal.fire({
      icon: 'success',
      title: 'Producto agregado al carrito',
      showConfirmButton: false,
      timer: 1500,
    });

    setShow(true);
  }

  return (
    <div key={data.id} className='container text-center detailContent'>
      <div className='cardDetail'>
        <img src={data.img} className='imagenDetail' alt="joyas" />
        <p className='parrafoDetail'>{data.nombre}</p>
        <p className='parrafoDetail'>Precio: ${data.precio} CLP</p>
        <p className='cantidadCard'>Stock: {data.maximo}</p>
        <p className='description'>Descripcion: {data.descripcion}</p>
        {show ? (
          <Link to="/cart" className="container btn btnDetail btn-primary" type="button">
            Ver Carro de compras 
          </Link>
        ) : (
          <ItemCounter maximo={data.maximo} id={data.id} cantidad={cantidad} onAdd={agregarAlCarro} /> 
        )}
        <Link to="/" className="container btn btnDetail btn-primary" type="button">
          Continuar Comprando
        </Link>
      </div>
    </div>
  );
};

export default ItemDetails;


