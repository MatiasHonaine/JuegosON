
import React from 'react'
import { Button } from 'bootstrap'
import { CartContext } from '../../context/CartContext'



export const AddItemButton = ({ label = "Agregar", quantity }) => {


    const { itemCount, setItemCount } = React.useContext(CartContext)


    const handleAddCart = () => {
        setItemCount(itemCount + quantity);
        handleResetQuantity();
    }

    return (
        <Button onClick={(handleAddCart)} style={{ margin: '10px 0', background: 'yellow', color: 'black' }}>{label}</Button>
    )
}
