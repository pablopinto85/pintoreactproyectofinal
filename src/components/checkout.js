import React from 'react';
import '../App.css'; 
import { useCarrito } from '../context/cartContext';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { db } from '../firebase/config';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';

const Checkout = () => {
  const { carrito, vaciarCarrito } = useCarrito();

  const { register, handleSubmit } = useForm();
  const [metodoEnvio, setMetodoEnvio] = useState('');

  const comprar = async (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: calcularTotal(),
    };

    try {
      const pedidosCollection = collection(db, 'pedidos');
      await addDoc(pedidosCollection, pedido);

      Swal.fire({
        icon: 'success',
        title: 'Compra realizada con éxito, serás dirigido al portal de pagos',
        showConfirmButton: false,
        timer: 1500,
      });

      vaciarCarrito();
    } catch (error) {
      console.error('Error al guardar el pedido:', error);
    }
  };

  const calcularTotal = () => {
    return carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
  };

  return (
    
    <div className="container text-center ">
        <h3>Completa el Formulario para finalizar tu compra</h3>
        <div className="container text-center detailContent"><form className="border p-2" onSubmit={handleSubmit(comprar)}>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Ingresa tu nombre" {...register("nombre")} />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Ingresa tu correo" {...register("email")} />
        </div>
        <div className="mb-3">
        <select
  className="form-select"
  aria-label="Default select example"
  onChange={(e) => setMetodoEnvio(e.target.value)}
  value={metodoEnvio}
>
  <option value="">Selecciona Metodo de Envío</option>
  <option value="Retiro en tienda">Retiro en tienda</option>
  <option value="Despacho a Domicilio">Despacho a Domicilio</option>
</select>
        </div>
        <div className="mb-3">
  <input
    type="text"
    className="form-control"
    placeholder="Ingresa tu dirección"
    {...register("dirección")}
    disabled={metodoEnvio === "Retiro en tienda"}
  />
</div>

        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Ingresa tu Telefono" {...register("telefono")} />
        </div>
        <button type="submit" className="btn btn-primary">Finalizar Compra</button>
      </form>
    </div></div>
  );
};

export default Checkout;
