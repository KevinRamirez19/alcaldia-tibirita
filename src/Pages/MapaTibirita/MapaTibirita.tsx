import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl, LayerGroup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';
import { Switch, Input, Select, Card, Button } from 'antd';
import { EnvironmentOutlined, ShareAltOutlined } from '@ant-design/icons';

const { Option } = Select;
const { BaseLayer } = LayersControl;

// Icono personalizado genérico
const customIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

interface PuntoMapa {
  id: number;
  nombre: string;
  descripcion: string;
  lat: number;
  lng: number;
  categoria: string;
}

const puntos: PuntoMapa[] = [
  {
    id: 1,
    nombre: 'Parque Principal Tibirita',
    descripcion: 'Zona turística y recreativa en el corazón del municipio.',
    lat: 5.0485,
    lng: -73.5159,
    categoria: 'Turismo'
  },
  {
    id: 2,
    nombre: 'Centro de Salud',
    descripcion: 'Atención médica básica para la comunidad.',
    lat: 5.049,
    lng: -73.5165,
    categoria: 'Salud'
  }
  // Puedes añadir más puntos aquí
];

export default function MapaInteractivo() {
  const [filtro, setFiltro] = useState<string>('');
  const [busqueda, setBusqueda] = useState<string>('');
  const [modoOscuro, setModoOscuro] = useState<boolean>(false);
  const [ubicacion, setUbicacion] = useState<[number, number] | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUbicacion([position.coords.latitude, position.coords.longitude]);
      },
      () => {
        console.warn('No se pudo obtener la ubicación');
      }
    );
  }, []);

  const puntosFiltrados = puntos.filter((p) => {
    return (
      (!filtro || p.categoria === filtro) &&
      p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ minHeight: '100vh', backgroundColor: modoOscuro ? '#1e1e1e' : '#f0f2f5', padding: '20px',width: '190%' }}  
    >
      {/* Encabezado institucional */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
        <img src="https://unpscolombia2015.com/wp-content/uploads/2023/01/Alcaldia-San-Juan-De-Arama.jpg" alt="Escudo Tibirita" width={60} />
        <h1 style={{ color: modoOscuro ? 'white' : 'black' }}>Mapa Interactivo de Tibirita</h1>
      </div>

      {/* Filtros */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px', flexWrap: 'wrap' }}>
        <Input
          placeholder="Buscar lugar..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{ maxWidth: '250px' }}
        />
        <Select
          placeholder="Filtrar por categoría"
          onChange={(value) => setFiltro(value)}
          allowClear
          style={{ maxWidth: '200px' }}
        >
          <Option value="Turismo">Turismo</Option>
          <Option value="Salud">Salud</Option>
          <Option value="Educación">Educación</Option>
        </Select>
        <Switch
          checked={modoOscuro}
          onChange={setModoOscuro}
          checkedChildren="Oscuro"
          unCheckedChildren="Claro"
        />
      </div>

      {/* Mapa */}
      <MapContainer
        center={[5.0485, -73.5159]}
        zoom={16}
        style={{ height: '500px', borderRadius: '15px', marginBottom: '20px', width: '100%' }}
      >
        <LayersControl position="topright">
          <BaseLayer checked name="Mapa Claro">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </BaseLayer>
          <BaseLayer name="Mapa Satelital">
            <TileLayer url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}" subdomains={['mt0', 'mt1', 'mt2', 'mt3']} />
          </BaseLayer>
        </LayersControl>

        {puntosFiltrados.map((punto) => (
          <Marker key={punto.id} position={[punto.lat, punto.lng]} icon={customIcon}>
            <Popup>
              <strong>{punto.nombre}</strong>
              <p>{punto.descripcion}</p>
            </Popup>
          </Marker>
        ))}

        {ubicacion && (
          <Marker position={ubicacion} icon={customIcon}>
            <Popup>Tu ubicación actual</Popup>
          </Marker>
        )}
      </MapContainer>

      {/* Tarjetas informativas */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
        {puntosFiltrados.map((p) => (
          <Card
            key={p.id}
            title={p.nombre}
            style={{ borderRadius: '12px' }}
            actions={[
              <Button
                icon={<EnvironmentOutlined />}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Ver en Mapa
              </Button>,
              <Button icon={<ShareAltOutlined />}>Compartir</Button>
            ]}
          >
            <p>{p.descripcion}</p>
            <p><strong>Categoría:</strong> {p.categoria}</p>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}
