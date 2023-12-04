import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../../context'


const ItemCount = () => {
    const { state, setState } = useContext(CartContext);
    const [count, setCount] = React.useState(0);


    const handleAddProduct = () => {
        setCount(count + 1);
        setState(count + 1);
    };

    const handleRemoveProduct = () => {
        setCount(count - 1);
        setState(count - 1);

    };

    return (
        <div>
            <button onClick={handleRemoveProduct}>-</button>
            <input type='number' value={count} />
            <button onClick={handleAddProduct}>+</button>
        </div>
    )
}

export default ItemCount;