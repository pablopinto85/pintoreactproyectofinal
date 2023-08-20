import React from 'react';
import { useForm } from "react-hook-form";
import '../App.css';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

const Contacto = () => {

    const {register , handleSubmit }  = useForm();
   const enviar = (data) => {
    console.log(data)

    Swal.fire({
        icon: 'success',
        title: 'Formulario Enviado Exitosamente ',
        showConfirmButton: false,
        timer: 1500,
      });

    }
  return (
    <div className="container text-center detailContent">
      <form className="border p-2" onSubmit={handleSubmit(enviar)}>
        <div className="mb-3">
        <input type="text" className="form-control" placeholder="Ingresa tu nombre" {...register("nombre")} />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Ingresa tu correo"{...register("email")} />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Ingresa tu Telefono"{...register("telefono")} />
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
