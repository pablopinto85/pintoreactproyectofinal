import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import '../App.css'; 
import { useParams } from 'react-router-dom';
import { db } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';


const ItemDetailContainer = () => {
    const { id } = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const docRef = doc(db, 'productos', id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setData(docSnap.data());
                } else {
                    console.log('No such document!');
                }
            } catch (error) {
                console.error('Error getting document:', error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <>
            {data ? <ItemDetail data={data} /> : <h1>Cargando...</h1>}
        </>
    );
};

export default ItemDetailContainer;