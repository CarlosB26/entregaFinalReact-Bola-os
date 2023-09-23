import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = ({product}) => (
    <Card className="text-center mb-4" key={product.id} style={{ width: '20rem'}}>
    <Card.Img style={{width: "300px", height: "400px"}}variant="top" src={product.imagen}/>
    <Card.Body>
      <Card.Title>{product.nombre}</Card.Title>
      <Card.Text>
        <span>$</span>{product.precio}
      </Card.Text>
      <Button variant="primary"  id="buttonTT">See TT</Button>
      <Link to={`/item/${product.id}`}>
        <Button variant="primary" id="buttonDetails">Details</Button>
        </Link>
    </Card.Body>
  </Card>
)