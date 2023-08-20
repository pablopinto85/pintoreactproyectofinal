import React from 'react';
import { Item } from './Item';

export const ItemList=({productos})=>{
return(
    <div>
        {productos.map((unProducto)=> <Item key={unProducto.id} nombre={unProducto.nombre} id={unProducto.id}precio={unProducto.precio} categoria={unProducto.categoria}img={unProducto.img}/>)}
    </div>
)
}

export default ItemList;