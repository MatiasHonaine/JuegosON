import React from 'react'

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {

    const [itenCount, setItemCount] = React.useState(0);

    return (
        <CartContext.Provider value={{ itenCount, setItemCount }}>{children}</CartContext.Provider>
    )
}
