
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const ItemDetail = ({product}) =>
<div className="d-flex flex-column align-items-center">
<Card className="text-center mb-4" key={product.id} style={{ width: '20rem'}}>
    <Card.Img style={{width: "300px", height: "400px"}}variant="top" src={product.imagen}/>
    <Card.Body>
      <Card.Title>{product.nombre}</Card.Title>
      <Card.Text>
        <span>$</span>{product.precio}
      </Card.Text>
      <Card.Text>
        <span>Stock:</span>{product.stock}
      </Card.Text>
      <Button variant="primary" id="buttonBuy">Buy</Button>
      <Button variant="primary" id="buttonTT">See TT</Button>
    </Card.Body>
  </Card>
</div>