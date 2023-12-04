import axios from "axios";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";


const Item = () => {

    const [product, setProduct] = useState({});

    const { id } = useParams();

    const [loading, setLoading] = useState(true);



    useEffect(() => {

        axios

            .get(`https://dummyjson.com/products/${id}`)

            .then((res) => {

                // Simular una demora de 2 segundos con setTimeout

                setTimeout(() => {

                    setProduct(res.data);

                }, 2000);

            })

            .finally(() => {

                // Simular una demora adicional de 2 segundos antes de cambiar el estado de carga

                setTimeout(() => {

                    setLoading(false);

                }, 2000);

            });

    }, [id]);



    // hacemos el rendering condicional

    return loading ? <LoaderComponent /> : <ItemDetailContainer product={product} />;

};


export default Item;