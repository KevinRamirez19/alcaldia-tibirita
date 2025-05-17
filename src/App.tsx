import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './Pages/HomePage/Home'
import Noticias from "./Pages/NoticiasPage/Noticias"
import Sitios_Turisticos from "./Pages/Sitios_TuristicosPage/Sitios_Turisticos"
import Mision_vision from "./Pages/Mision_visionPage/Mision_vision"
import Tramites_servicios from "./Pages/Tramites_serviciosPage/Tramites_servicios"
import 'leaflet/dist/leaflet.css';
import Transparencia from "./Pages/TransparenciaPage/Transparencia"
import Testimonios from "./Pages/TestimoniosPage/Testimonios"
import MapaTibirita from './Pages/MapaTibirita/MapaTibirita'
import Login from './Pages/LoginPage/Login'
import Politicas from './Pages/PoliticasPage/Politicas'
import Registro from './Pages/LoginPage/Registro'
function MyComponent() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/tramites-servicios'); // Cambia la ruta a la que deseas navegar
  };
  return (
    <div>
      <button onClick={handleButtonClick}>Ir a Trámites y Servicios</button>
    </div>
  );
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/noticias" element={<Noticias />} />
      <Route path="/Sitios_Turisticos" element={<Sitios_Turisticos />} />
      <Route path="/Mision_vision" element={<Mision_vision />} />
      <Route path="/tramites-servicios" element={<Tramites_servicios />} />
      <Route path="/MapaTibirita" element={<MapaTibirita />} />
      <Route path="/testimonios" element={<Testimonios />} />
      <Route path="/Politicas" element={<Politicas />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/transparencia" element={<Transparencia />} />
      <Route path="/MyComponent" element={<MyComponent />} />
      <Route path="Registro" element={<Registro />} />
    </Routes>

  )
}

export default App


