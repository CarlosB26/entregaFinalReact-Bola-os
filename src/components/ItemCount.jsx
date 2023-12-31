import { useState } from "react";
import Button from 'react-bootstrap/Button';


export const ItemCount = ({onAdd, stock}) => {

    const [count, setCount] = useState(1);

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


    return (
        <div className="itemCount">
            <span onClick={handleDecreaseCount}>-</span>
            <span>{count}</span>
            <span onClick={handleIncreaseCount}>+</span>
            <Button id="buttonBuy" onClick={() => onAdd(count)}>buy</Button>
        </div>
    )
}