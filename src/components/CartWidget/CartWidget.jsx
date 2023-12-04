import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../context";

const CartWidget = () => {

    const { state } = useContext(CartContext)

    return (
        <div>
            <FontAwesomeIcon style={{ fontSize: '1.4rem', paddingRight: '10px' }} icon={faCartShopping} />
            <span style={{ fontSize: '1.4 rem' }}>{state}</span>
        </div>
    )
}

export default CartWidget;