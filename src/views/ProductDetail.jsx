import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';

function ProductDetail() {
  const [producto, setProducto] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getProductoById = async () => {
      try {
        const respuesta = await fetch('../pizzas.json');
        const datos = await respuesta.json();
        const productoEncontrado = datos.find((dato) => dato.id === id);
        setProducto(productoEncontrado);
      } catch (error) {
        console.error('Error: ', error);
      }
    };

    getProductoById();
  }, [id]);

  if (!producto) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    <Card className="mx-auto my-5" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.img} />
      <Card.Body>
        <Card.Title>{producto.name}</Card.Title>
        <p>{producto.desc}</p>
        <Card.Text>
          <p>Ingredientes:</p>
          {producto.ingredients.map((ingrediente) => (
            <p key={ingrediente}>🍕{ingrediente}</p>
          ))}
        </Card.Text>
        <h3>${producto.price}</h3>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ProductDetail;