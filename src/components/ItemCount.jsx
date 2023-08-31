import { useState } from "react";

export const ItemCount = () => {
    const stock = 4;

    const [count, setCount] = useState(0);

    const handleDecreaseCount = () => {
        if (count > 1) {
            setCount((prev) => prev - 1)
        }
    };

    const handleIncreaseCount = () => {
        if (stock > count) {
            setCount((prev) => prev + 1)
        }
    };

    const onAdd = () => {
            alert("Se agregaron " + count +  " productos");
    };

    return (
        <div className="itemCount">
            <span onClick={handleDecreaseCount}>-</span>
            <span>{count}</span>
            <span onClick={handleIncreaseCount}>+</span>
            <button onClick={onAdd}>Agregar al Carrito</button>
        </div>
    )
}