import { useContext } from "react"
import { Link } from "react-router-dom"
import cart from "../assets/cart.png"
import { CartContext } from "../contexts/CartContext"

export const CartWidget = () => {
    const {totalWidget} = useContext(CartContext)

    return (
    <Link to="/cart" id="linkWid">
        <div id="cartNum">
            <img src={cart} alt="Carrito" id="cartLogo"/> <span id="totWid">{totalWidget}</span>
        </div>
    </Link>
    )
}