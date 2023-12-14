import React from "react";
import { Card } from "react-bootstrap";
import { ItemQuantitySelector } from "../ItemQuantitySelector/ItemQuantitySelector";


const ItemDetailContainer = ({ product }) => {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                width: "100vw",
                justifyContent: "space-around",
            }}
        >



            return (
            <Card key={product.id} style={{ width: "18rem", margin: 20, height: "500px" }}>

                <Card.Img variant="top" src={product.thumbnail} />

                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>

                </Card.Body>
                <ItemQuantitySelector/>
            </Card>
            );

        </div>
    )
}

export default ItemDetailContainer;