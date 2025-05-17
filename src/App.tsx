import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './Pages/HomePage/Home'
import Noticias from "./Pages/NoticiasPage/Noticias"
import Sitios_Turisticos from "./Pages/Sitios_TuristicosPage/Sitios_Turisticos"
import Mision_vision from "./Pages/Mision_visionPage/Mision_vision"
import Tramites_servicios from "./Pages/Tramites_serviciosPage/Tramites_servicios"
import 'leaflet/dist/leaflet.css'
import Transparencia from "./Pages/TransparenciaPage/Transparencia"
import Testimonios from "./Pages/TestimoniosPage/Testimonios"
import MapaTibirita from './Pages/MapaTibirita/MapaTibirita'
import Login from './Pages/LoginPage/Login'
import Politicas from './Pages/PoliticasPage/Politicas'
import Registro from './Pages/LoginPage/Registro'

function MyComponent() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/tramites-servicios');
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Ir a Trámites y Servicios</button>
    </div>
  );
}

function App() {
  // 🟢 Agregamos Drift con useEffect
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      "use strict";
      !function() {
        var t = window.driftt = window.drift = window.driftt || [];
        if (!t.init) {
          if (t.invoked) return;
          t.invoked = !0;
          t.methods = ["identify","config","track","reset","debug","show","ping","page","hide","off","on"];
          t.factory = function(e) {
            return function() {
              var n = Array.prototype.slice.call(arguments);
              n.unshift(e);
              t.push(n);
              return t;
            };
          };
          t.methods.forEach(function(e) {
            t[e] = t.factory(e);
          });
          t.load = function(tid) {
            var e = 3e5;
            var n = Math.ceil(new Date() / e) * e;
            var o = document.createElement("script");
            o.type = "text/javascript";
            o.async = true;
            o.crossOrigin = "anonymous";
            o.src = "https://js.driftt.com/include/" + n + "/" + tid + ".js";
            var i = document.getElementsByTagName("script")[0];
            i.parentNode.insertBefore(o, i);
          };
        }
      }();
      drift.SNIPPET_VERSION = '0.3.1';
      drift.load('dgvitu5g745w');
    `;
    document.body.appendChild(script);
  }, []);

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
      <Route path="/Registro" element={<Registro />} />
    </Routes>
  )
}

export default App
