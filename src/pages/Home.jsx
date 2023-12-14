import React from "react";

import { useEffect, useState } from 'react';
import axios from "axios";

import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { getDocs, getFirestore, collection, getDoc, doc, query, where} from "firebase/firestore";



const Home = () => {

    /*const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get('https://dummyjson.com/products/?limit=8')
            .then(res => {
                setProducts(res.data.products)
            })
            .catch(error => console.log(error))

    }, [])*/

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        const db = getFirestore();
        const collectionRef = collection(db, "products");

        getDocs(collectionRef)
            .then((res) => {
                const data = res.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProducts(data);
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, []);



    return <ItemListContainer products={products} />
}

export default Home;