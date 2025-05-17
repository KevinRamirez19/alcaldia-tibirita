import { useState } from 'react';
import './Sitios_Turisticos.css';
import Modal from 'react-modal';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

// Datos de ejemplo de sitios turísticos
const sitios = [
  {
    id: 1,
    nombre: "Parque Natural X",
    descripcion: "Un hermoso parque natural lleno de biodiversidad.",
    lat: 4.5,
    lng: -74.0,
    imagen: "https://www.viajarenverano.com/wp-content/uploads/2017/10/Tibirita-Cupula1.jpg",
    redes: {
      youtube: "https://youtu.be/J99RHxWQ0yM"
    },
    fotos: [
      "https://viajaporcolombia.com/images/aventura-la-chorrera.jpg",
      "https://viajaporcolombia.com/images/aventura-la-chorrera.jpg"
    ],
    calificacion: 4.5
  },
  // Agrega más sitios turísticos aquí...
];

const SitiosTuristicos = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedSite, setSelectedSite] = useState<{
    id: number;
    nombre: string;
    descripcion: string;
    lat: number;
    lng: number;
    imagen: string;
    redes: {
      youtube: string;
    };
    fotos: string[];
    calificacion: number;
  } | null>(null);

  const openModal = (site: any) => {
    setSelectedSite(site);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f0f2f5', padding: '20px' }}>
      <div
        style={{
          maxWidth: '1900px',
          width: '100%',
          margin: '0 auto',
          padding: '20px',
          backgroundColor: 'white',
          borderRadius: '15px',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Encabezado institucional */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <img
            src="https://unpscolombia2015.com/wp-content/uploads/2023/01/Alcaldia-San-Juan-De-Arama.jpg"
            alt="Escudo Tibirita"
            style={{ width: '60px', height: '60px', marginRight: '15px' }}
          />
          <h1 style={{ fontSize: '2rem' }}>Sitios Turísticos de Tibirita</h1>
        </div>

        {/* Lista de sitios turísticos */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {sitios.map((sitio) => (
            <motion.div
              key={sitio.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="card">
                <img src={sitio.imagen} alt={sitio.nombre} className="card-image" />
                <h2>{sitio.nombre}</h2>
                <p>{sitio.descripcion}</p>
                <p><strong>Calificación: </strong>{sitio.calificacion} / 5</p>
                <Button type="primary" onClick={() => openModal(sitio)} className="btn-ver-mas">
                  Ver Más
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal con detalles del sitio turístico */}
      {selectedSite && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Sitio Turístico"
          style={{
            content: {
              maxWidth: '800px',
              margin: 'auto',
              backgroundColor: '#fff',  // Fondo blanco
              color: '#333',  // Texto oscuro
              padding: '20px', // Espaciado adecuado
              borderRadius: '10px', // Bordes redondeados
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Sombra sutil
            },
          }}
        >
          <h2>{selectedSite.nombre}</h2>
          <p>{selectedSite.descripcion}</p>
          <div className="gallery">
            {selectedSite.fotos.map((foto, index) => (
              <img key={index} src={foto} alt={`Galería ${index + 1}`} className="gallery-image" />
            ))}
          </div>
          <a
            href={selectedSite.redes.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-youtube"
          >
            <span className="youtube-icon">🎥</span>
            <span className="btn-youtube-text">Ver en YouTube</span>
          </a>
          <button onClick={closeModal}>Cerrar</button>
        </Modal>
      )}

      {/* Botón flotante para volver arriba */}
      <Button
        type="primary"
        shape="circle"
        icon={<SearchOutlined />}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
        }}
        onClick={() => window.scrollTo(0, 0)}
      />
    </div>
  );
};

export default SitiosTuristicos;
