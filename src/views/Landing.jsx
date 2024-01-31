import { useState, useEffect } from "react";
import Product from "../components/Product";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Landing = () => {

  const [productos, setProductos] = useState();

  useEffect(() => {

    //async/await para manejar el asincronismo

    const consultarAPI =  async () => {

      try {
        const respuesta = await fetch('./pizzas.json')
        const datos =  await respuesta.json();
        setProductos(datos);
      } catch (error) {
        console.error('Error: ', error)
      }
    }

    consultarAPI();

  }, [])

  if (productos==null) {
    return(
      <h1>Cargando...</h1>
    )
  }

  return (
    <div>

       <Container>
          <Row  className="g-4 mt-2">
          {
              productos.map( 
                (producto) => (
                <Col key={producto.id}>
                  <Product producto={producto} />
                </Col>
                  
                )
              )
            }
          </Row>
        </Container>


    </div>
  )
}

export default Landing;