import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { useCart } from '../context/cartContext';

function Product( { producto }  ) {

  const {addProduct} = useCart();




  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.img} />
      <Card.Body>
        <Card.Title>{producto.name}</Card.Title>
        <Card.Text>

          <p>Ingredientes:</p>
          {producto.ingredients.map(
            (i => (
                <p>🍕{i}</p>
            ))
          )}
        </Card.Text>
        
      </Card.Body>
      <h3>${producto.price}</h3>
      <Card.Footer>
        
      <Link to={`/pizza/${producto.id}`}>
        <Button variant="info">Ver más 👀</Button>
      </Link>
          
          
          <Button onClick={ () => addProduct(producto) } variant="danger">Añadir 🛒</Button>
      </Card.Footer>
    </Card>
  );
}

export default Product;