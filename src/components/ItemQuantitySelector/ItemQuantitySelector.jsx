import React from 'react'
import { Button } from 'bootstrap'
import { AddItemButton } from '../AddItemButton/AddItemButton'

export const ItemQuantitySelector = () => {

    const [quantity, setQuantity] = React.useState(1)


    const handleAddProduct = () => {

        setQuantity(quantity + 1)
    }

    const handleSubstractProduct = () => {

        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }


    const handleResetQuantity = () => {
        setQuantity(1)
    }

    return (
        <div>
            <Button onClick={handleSubstractProduct}>
                -
            </Button>

            <input type="number" value={quantity} disabled />



            <Button onClick={handleAddProduct}>
                +
            </Button>

            <AddItemButton quantity={quantity} handleResetQuantity={handleResetQuantity} />
        </div>
    )
}
