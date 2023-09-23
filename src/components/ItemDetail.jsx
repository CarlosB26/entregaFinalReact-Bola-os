import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";
import { ItemCount } from "./ItemCount"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext)
  const onAdd = count => addItem(product, count)

  return (
    <div className="d-flex flex-column align-items-center">
      <Card className="text-center mb-4" key={product.id} style={{ width: '20rem' }}>
        <Card.Img style={{ width: "300px", height: "400px" }} variant="top" src={product.imagen} />
        <Card.Body>
          <Card.Title>{product.nombre}</Card.Title>
          <Card.Text>
            <span>$</span>{product.precio}
          </Card.Text>
          <Card.Text>
            <span>Stock:</span> {product.stock}
          </Card.Text>
          <Button variant="primary" id="buttonTT">See TT</Button>
          <ItemCount stock={product.stock} onAdd = {onAdd} />
        </Card.Body>
      </Card>
    </div>

  )

}