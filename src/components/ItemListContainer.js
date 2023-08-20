import React, { useEffect, useState, useCallback } from 'react';
import ItemList from './ItemList';
import { db } from '../firebase/config';
import { collection, query, where, getDocs } from 'firebase/firestore';
import '../App.css'; 
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { categoria } = useParams();

    const getData = useCallback(async () => {
        const productsCollection = collection(db, 'productos');
        let querySnapshot;

        if (categoria) {
            const categoriaQuery = query(productsCollection, where('categoria', '==', categoria));
            querySnapshot = await getDocs(categoriaQuery);
        } else {
            querySnapshot = await getDocs(productsCollection);
        }

        const dataProductos = querySnapshot.docs.map(doc => doc.data());
        return dataProductos;
    }, [categoria]);

    useEffect(() => {
        const fetchData = async () => {
            const dataProductos = await getData();
            setProductos(dataProductos);
        };

        fetchData();

        return () => {
            setProductos([]);
        }
    }, [getData]);

    return (
        <>
            {productos.length ? <ItemList productos={productos} /> : <h1>Cargando...</h1>}
        </>
    );
};

export default ItemListContainer;