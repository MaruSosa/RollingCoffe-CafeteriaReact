import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/common/Menu'
import Footer from './components/common/Footer'
import Inicio from './components/pages/Inicio'
import Administrador from './components/pages/Administrador'
import Error404 from './components/pages/Error404';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
 
  return (
    <BrowserRouter>
    <Menu></Menu>
    {/* <Menu usuarioLogueado = {usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Menu> */}
    <Routes>
      <Route exact path="/" element={<Inicio></Inicio>}></Route>
      {/* <Route
        exact
        path="/detalleProducto/:id"
        element={<DetalleProducto></DetalleProducto>}
      ></Route> */}
      {/* <Route exact path="/login" element={<Login setUsuarioLogueado = {setUsuarioLogueado}></Login>}></Route> */}
      {/* <Route
        exact
        path="/administrador/*"
        element={
          <RutasProtegidas>
            <RutasAdmin></RutasAdmin>
          </RutasProtegidas>
        }
      ></Route> */}
      <Route path="/administrador" element={<Administrador></Administrador>}></Route>
      <Route path="/error404" element={<Error404></Error404>}></Route>
    </Routes>
    <Footer></Footer>
  </BrowserRouter>
  );
}

export default App
