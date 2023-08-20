import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

export const Item = ({id, img, nombre, precio,})=>{
    
    return(

<div key={id} className='cardContent'>
            <div className='card'>
                    <img src={img} className='imagenCard' alt="joyas"/>
                    <p className='tituloCard'>{nombre}</p>
                    <p className='precioCard'>Precio: ${precio} CLP</p>
                    <Link to={`/detalles/${id}`} className='linkCard'>
                    <button className='container btn btnDetail btn-primary'>Ver Más</button>
                    </Link>
            </div>
            
        </div>
    )
}
export default Item;
