import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
    
    return (
        <div>
            <FontAwesomeIcon style={{fontSize: '1.4rem', paddingRight: '10px'}} icon={faCartShopping} />
            <span style={{fontSize: '1.4 rem'}}>0</span>
        </div>
    )
}

export default CartWidget;