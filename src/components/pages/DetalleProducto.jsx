import { Container, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { obtenerProductoAPI } from "../../helpers/queries";
import Swal from "sweetalert2";

const DetalleProducto = () => {
  const { id } = useParams(); 
  /*useParams es un hook proporcionado por React Router que te permite acceder a los parámetros de la URL en un componente funcional. Esto es útil cuando estás utilizando React Router para manejar la navegación en tu aplicación y necesitas acceder a los parámetros que se pasan en la URL, como identificadores únicos u otra información dinámica. */
  const [producto, setProducto] = useState({});

  useEffect(() => {
    //useEffect es un hook de React que te permite realizar efectos secundarios en componentes funcionales. Estos efectos secundarios pueden ser cosas como suscribirse a recursos externos (como datos de una API), manipular el DOM directamente o ejecutar código después de que se haya renderizado un componente.
    //buscar el producto que quiero maquetar
    cargarDetalle();
  }, []);

  const cargarDetalle = async () => {
    /*La palabra clave await es parte de la sintaxis de JavaScript y se utiliza en funciones que tienen la palabra clave async. Su función es pausar la ejecución de una función asíncrona hasta que una promesa se resuelva y devolver el resultado resuelto.En esencia, cuando utilizas await, estás diciendo al motor de JavaScript que espere hasta que la promesa se resuelva y devuelva el valor resuelto antes de continuar ejecutando el código siguiente.  */
    const respuesta = await obtenerProductoAPI(id); //trae el id de queries
    if (respuesta.status === 200) {
      //mostrar el producto en la card
      const datoProducto = await respuesta.json();
      setProducto(datoProducto);
    } else {
      Swal.fire({
        title: "Ocurrio un error",
        text: "Intente realizar esta operacion en unos minutos",
        icon: "error",
      });
    }
  };

  return (
    <Container className="my-3 mainSection">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src={producto.imagen}
              alt={producto.nombreProducto}
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title className="primary-font">
                {producto.nombreProducto}
              </Card.Title>
              <hr />
              <Card.Text>
                {producto.descripcion_amplia}
                <br />
                <br />
                <span className="primary-font fw-semibold ">
                  Categoria:
                </span>{" "}
                {producto.categoria}
                <br className="mb-3" />
                <span className="primary-font fw-semibold ">
                  Precio: ${producto.precio}
                </span>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleProducto;
