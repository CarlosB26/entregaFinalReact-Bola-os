import cart from "../assets/cart.png"

export const CartWidget = () => (
    <div id="cartNum">
        <img src={cart} alt="Carrito" id="cartLogo"/> <span>0</span>
    </div>
)