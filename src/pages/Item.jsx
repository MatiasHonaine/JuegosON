import axios from "axios";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";


const Item = () => {

    const [product, setProduct] = useState({});
    const { id } = useParams()

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios
            .get(`https://dummyjson.com/products/${id}`)
            .then(res => {
                setProduct(res.data)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))

    }, [id])


    {
        loading ? (
            <LoaderComponent />
        ) : (
            <ItemDetailContainer product={product} />
        )
    }

    return <ItemDetailContainer product={product} loading={loading} />
}

export default Item;