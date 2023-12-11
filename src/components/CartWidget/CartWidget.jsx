import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../context";

const CartWidget = () => {

    const { quantity } = React.useContext(CartContext);

    const iconStyles = {
        fontSize: "1.3rem",
        paddingRight: "10px",
    };
    return (
        <div>
            <FontAwesomeIcon style={iconStyles} icon={faCartShopping} />
            <span style={{ fontSize: "1.3rem" }}>{quantity}</span>
        </div>
    );
}

export default CartWidget;