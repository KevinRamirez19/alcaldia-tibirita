import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.css';

interface Noticia {
  id: number;
  titulo: string;
  descripcion: string;
  imagenUrl: string;
}

const noticiasMock: Noticia[] = [
  {
    id: 1,
    titulo: 'Ferias y Fiestas Tibirita 2024',
    descripcion: 'Participa en nuestra feria agropecuaria, impulsando el talento local y los productos de nuestra tierra.',
    imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShYRzAf1HrtEdNSzZ_92S6tzj2DOuQ_wIAsA&s'
  },
  {
    id: 2,
    titulo: 'Jornada de Vacunación',
    descripcion: 'Protege tu salud y la de tu familia. Asiste a la jornada de vacunación en el parque principal.',
    imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfV3jyNUy5Gxr2v75Bx-xVBn8iKLq3TUCuXg&s'
  },
  {
    id: 3,
    titulo: 'Obras de Infraestructura',
    descripcion: 'Comenzaron las obras de mejoramiento vial en la vereda El Rosal. Infórmate aquí.',
    imagenUrl: 'https://pbs.twimg.com/media/E4mQErwWUAULJit.jpg'
  }
];

const accesos = [
  { titulo: 'Noticias', icono: '📰', link: '/Noticias' },
  { titulo: 'Trámites', icono: '📄', link: '/tramites-servicios' },
  {titulo: 'Sitios Turísticos', icono: '🏞️', link: '/Sitios_Turisticos' },
  {titulo: 'Mision y vision', icono: '🌟', link: '/Mision_vision' },
  {titulo: 'MapaTibirita', icono: '🗺️', link: '/MapaTibirita' }  ,
  {titulo: 'Testimonios', icono: '💬', link: '/Testimonios' },
  {titulo: 'Login', icono: '🔑', link: '/Login' },
  {titulo: 'Transparencia', icono: '🔍', link: '/Transparencia' },
];

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div style={{ minHeight: '100vh', width: '150%', fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#fff' }}>
      {/* Barra de accesos rápidos */}
      <section style={{ width: '100%', padding: '20px 0', backgroundColor: '#00703c' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', justifyContent: 'space-evenly', gap: '20px', flexWrap: 'wrap' }}>
          {accesos.map((acceso, index) => (
            <Link
              key={acceso.titulo}
              to={acceso.link}
              style={accessCardStyle}
              data-aos="zoom-in"
              data-aos-delay={`${index * 100}`}
            >
              <div style={{ fontSize: '2rem' }}>{acceso.icono}</div>
              <div style={{ marginTop: '8px' }}>{acceso.titulo}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Carrusel institucional mejorado */}
      <section style={{ width: '100%', overflow: 'hidden' }}>
        <div style={{ maxWidth: '900px', margin: '100px auto 0 auto', padding: '20px', position: 'relative' }} data-aos="fade-in">
          <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            interval={5000}
            showStatus={false}
            showIndicators={true}
            transitionTime={700}
          >
            {[
              {
                url: "https://www.tibirita-cundinamarca.gov.co/sites/tibiritacundinamarca/content/files/000396/19774_es-1-2_200x200.png",
                alt: "Escudo",
                texto: "Bienvenidos a Tibirita"
              },
              {
                url: "https://www.arcgis.com/sharing/rest/content/items/2f72160cb0324750b996dbca4297c015/info/thumbnail/thumbnail1725551007752.png?w=500",
                alt: "Paisaje",
                texto: "Tradición, Cultura y Progreso"
              },
              {
                url: "https://www.cundinamarca.gov.co/wcm/connect/376f4e10-0058-4b6b-a7f0-f415b712569d/8.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-376f4e10-0058-4b6b-a7f0-f415b712569d-lOliVNt",
                alt: "Gobierno",
                texto: "Gestión con Transparencia"
              }
            ].map((item, i) => (
              <div key={i} style={{ height: '300px', padding: '20px' }}>
                <div style={{
                  border: '4px solid rgb(0, 0, 0)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#fff'
                }}>
                  <img
                    src={item.url}
                    alt={item.alt}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  />
                </div>
                <p className="legend">{item.texto}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Presentación institucional */}
      <section style={{ width: '100%', padding: '50px 20px', backgroundColor: '#f9f9f9' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333' }} data-aos="fade-up">Conoce Tibirita</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '30px', color: '#555' }} data-aos="fade-up" data-aos-delay="100">
            Tibirita es un municipio lleno de cultura, tradición y belleza natural. Trabajamos con pasión y compromiso para el bienestar de nuestros ciudadanos.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            <div style={cardStyle} data-aos="fade-up">
              <h3>Misión</h3>
              <p>Brindar servicios públicos de calidad y promover el desarrollo social, económico y cultural de nuestro municipio.</p>
            </div>
            <div style={cardStyle} data-aos="fade-up" data-aos-delay="100">
              <h3>Visión</h3>
              <p>Ser un municipio líder en gestión pública, reconocido por su transparencia, participación ciudadana y progreso sostenible.</p>
            </div>
            <div style={cardStyle} data-aos="fade-up" data-aos-delay="200">
              <h3>Historia</h3>
              <p>Tibirita, tierra de ancestros muiscas, guarda tradiciones centenarias que hoy día son orgullo de nuestros habitantes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Noticias recientes */}
      <section style={{ width: '100%', padding: '50px 20px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333' }}>Últimas Noticias</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            {noticiasMock.map((noticia, index) => (
              <div key={noticia.id} style={newsCardStyle} data-aos="fade-up" data-aos-delay={`${index * 150}`}>
                <img src={noticia.imagenUrl} alt={noticia.titulo} style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />
                <div style={{ padding: '15px' }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#2c3e50' }}>{noticia.titulo}</h3>
                  <p style={{ fontSize: '0.9rem', marginBottom: '15px', color: '#555' }}>{noticia.descripcion}</p>
                  <Link to={`/noticias/${noticia.id}`} style={{ color: '#00a651', fontWeight: 'bold' }}>Leer más</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pie de página */}
      <footer style={{ width: '100%', backgroundColor: '#2c3e50', color: 'white', padding: '20px', textAlign: 'center', marginTop: 'auto' }} data-aos="fade-up" data-aos-offset="100">
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '20px' }}>
          <div style={{ flex: '1 1 250px' }}>
            <h4 style={{ marginBottom: '10px' }}>Alcaldía Municipal de Tibirita</h4>
            <p>Dirección: Carrera 3 No. 3-36, Tibirita - Cundinamarca</p>
            <p>Teléfono: (601) 8571147</p>
            <p>Email: contactenos@tibirita-cundinamarca.gov.co</p>
          </div>
          <div style={{ flex: '1 1 200px' }}>
            <h4 style={{ marginBottom: '10px' }}>Horario de Atención</h4>
            <p>Lunes a Viernes</p>
            <p>8:00 a.m. - 12:00 p.m.</p>
            <p>2:00 p.m. - 5:00 p.m.</p>
          </div>
          <div style={{ flex: '1 1 200px' }}>
            <h4 style={{ marginBottom: '10px' }}>Enlaces de Interés</h4>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.6' }}>
              <li><Link to="/Politicas" style={{ color: 'white', textDecoration: 'underline' }}>Política de Privacidad</Link></li>
              <li><Link to="/transparencia" style={{ color: 'white', textDecoration: 'underline' }}>Transparencia</Link></li>
            </ul>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '30px', fontSize: '0.9rem', borderTop: '1px solid #555', paddingTop: '20px' }}>
          © {new Date().getFullYear()} Alcaldía de Tibirita - Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
};

// Estilos
const cardStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  flex: '1 1 300px',
  minHeight: '200px',
  textAlign: 'left',
  color: '#333'
};

const newsCardStyle: React.CSSProperties = {
  backgroundColor: '#fff',
  width: '300px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
  overflow: 'hidden',
  textAlign: 'left'
};

const accessCardStyle: React.CSSProperties = {
  backgroundColor: '#00a651',
  color: 'white',
  padding: '4px 8px',  // Reduce el padding
  borderRadius: '6px',  // Reducción del border-radius para botones más pequeños
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '0.6rem',  // Reduce el tamaño de la fuente
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  textAlign: 'center',
  transition: 'transform 0.2s',
  width: '60px',  // Reduce el ancho
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '8px'
};




export default Home;
