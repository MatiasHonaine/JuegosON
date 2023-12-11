import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { AddItemButton } from '../AddItemButton';


const ItemQuantitySelector  = () => {
    
    const [count, setCount] = React.useState(0);


    const handleAddProduct = () => {
        setCount(count + 1);
        
    };

    const handleRemoveProduct = () => {
        if(count > 1){
            setCount(count - 1)
        }

    };

    return (
        <div>
            <button onClick={handleRemoveProduct}>-</button>
            <input type='number' value={count} />
            <button onClick={handleAddProduct}>+</button>
            <AddItemButton count={count}/>
        </div>
    )
}

export default ItemQuantitySelector ;