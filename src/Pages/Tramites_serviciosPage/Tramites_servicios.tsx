import {
  Card,
  Input,
  Select,
  Button,
  Modal,
  Pagination,
  Collapse,
  notification
} from 'antd';
import {
  UserAddOutlined,
  FileTextOutlined,
  IdcardOutlined,
  FacebookOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
  StarFilled,
  StarOutlined
} from '@ant-design/icons';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from 'react-share';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const { Search } = Input;
const { Option } = Select;
const { Panel } = Collapse;

const tramites = [
  {
    id: '1',
    titulo: 'Solicitud de cédula rural',
    descripcion: 'Trámite para obtener una cédula rural para labores agrícolas.',
    icono: <UserAddOutlined style={{ fontSize: 30, color: '#1890ff' }} />,
    categoria: 'documento',
    ruta: '/tramites/cedula-rural',
  },
  {
    id: '2',
    titulo: 'Registro de predios',
    descripcion: 'Registrar un terreno o finca en el catastro local.',
    icono: <FileTextOutlined style={{ fontSize: 30, color: '#52c41a' }} />,
    categoria: 'registro',
    ruta: '/tramites/registro-predios',
  },
  {
    id: '3',
    titulo: 'Certificado de residencia',
    descripcion: 'Obtener constancia oficial de que resides en Tibirita.',
    icono: <IdcardOutlined style={{ fontSize: 30, color: '#f5222d' }} />,
    categoria: 'documento',
    ruta: '/tramites/certificado-residencia',
  },
];

export default function TramitesServicios() {
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('');
  const [paginaActual, setPaginaActual] = useState(1);
  const [favoritos, setFavoritos] = useState<string[]>([]);
  const [tramiteSeleccionado, setTramiteSeleccionado] = useState<typeof tramites[0] | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const tramitesPorPagina = 6;
  const resultados = tramites.filter((t) =>
    t.titulo.toLowerCase().includes(busqueda.toLowerCase()) &&
    (!categoria || t.categoria === categoria)
  );

  const tramitesPagos = resultados.slice((paginaActual - 1) * tramitesPorPagina, paginaActual * tramitesPorPagina);

  const handleFavorito = (id: string) => {
    setFavoritos((prev) => {
      return prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id];
    });
  };

  const handleVerMas = (tramite: typeof tramites[0]) => {
    setTramiteSeleccionado(tramite);
    setIsModalVisible(true);
  };

  const handleChangePage = (page: number) => {
    setPaginaActual(page);
  };

  useEffect(() => {
    setTimeout(() => {
      notification.error({
        message: 'Error',
        description: 'Hubo un problema al cargar los trámites. Por favor, inténtelo más tarde.',
      });
    }, 5000);
  }, []);


  const coloresPorCategoria = {
    documento: '#1890ff',
    registro: '#52c41a',
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f0f2f5',
        fontFamily: 'Segoe UI, sans-serif',
        boxSizing: 'border-box',
        width: '210%',
      }}
      role="main"
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          padding: '30px',
          maxWidth: '90%', // Permitir que el contenedor ocupe el 90% del ancho
          margin: '0 auto', // Centrar el contenedor
          boxShadow: '0 8px 20px rgba(255, 255, 255, 0.98)',
        }}
      >
        {/* Encabezado institucional */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            gap: '15px',
            backgroundColor: '#1890ff', // Azul de fondo
            padding: '10px 20px', // Espaciado adicional para que no se vea pegado al borde
            borderRadius: '10px', // Esquinas redondeadas
          }}
        >
          <img
            src="https://unpscolombia2015.com/wp-content/uploads/2023/01/Alcaldia-San-Juan-De-Arama.jpg"
            alt="Escudo de Tibirita"
            style={{ width: '60px', height: '60px' }}
          />
          <h1 style={{ fontSize: '1.8rem', margin: 0, color: 'white' }}>Alcaldía de Tibirita - Trámites y Servicios</h1>
        </div>

        {/* Filtros */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '10px',
            flexWrap: 'wrap',
            marginBottom: '20px',
          }}
        >
          <Search
            placeholder="Buscar trámite..."
            onSearch={(value) => setBusqueda(value)}
            onChange={(e) => setBusqueda(e.target.value)}
            style={{ flex: 1, minWidth: '250px' }}
            allowClear
            aria-label="Buscar trámite"
          />
          <Select
            placeholder="Filtrar por categoría"
            style={{ flex: 1, minWidth: '250px' }}
            onChange={setCategoria}
            allowClear
            aria-label="Filtrar por categoría"
          >
            <Option value="documento">Documentos</Option>
            <Option value="registro">Registro</Option>
          </Select>
        </div>

        {/* Tarjetas de trámites */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {tramitesPagos.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card
                hoverable
                style={{
                  borderRadius: 12,
                  textAlign: 'center',
                  border: `2px solid ${coloresPorCategoria[t.categoria as keyof typeof coloresPorCategoria]}`,
                }}
                bodyStyle={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                {t.icono}
                <h3>{t.titulo}</h3>
                <p style={{ color: 'gray', minHeight: '60px' }}>{t.descripcion}</p>
                <Button type="primary" onClick={() => handleVerMas(t)}>
                  Ver más
                </Button>
                <Button icon={favoritos.includes(t.id) ? <StarFilled /> : <StarOutlined />} onClick={() => handleFavorito(t.id)} aria-label="Favorito" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Paginación */}
        <Pagination
          current={paginaActual}
          total={resultados.length}
          pageSize={tramitesPorPagina}
          onChange={handleChangePage}
          style={{ textAlign: 'center', marginTop: '20px' }}
        />

        {/* Compartir en redes */}
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <h3>Comparte esta página:</h3>
          <FacebookShareButton url={window.location.href}><Button icon={<FacebookOutlined />} /></FacebookShareButton>
          <TwitterShareButton url={window.location.href}><Button icon={<TwitterOutlined />} /></TwitterShareButton>
          <WhatsappShareButton url={window.location.href}><Button icon={<WhatsAppOutlined />} /></WhatsappShareButton>
        </div>

        {/* Preguntas Frecuentes */}
        <div style={{ marginTop: '40px' }}>
          <h2>Preguntas Frecuentes</h2>
          <Collapse accordion>
            <Panel header="¿Cómo puedo obtener mi certificado de residencia?" key="1">
              Puedes solicitarlo en la sección correspondiente o dirigirte a la oficina de atención ciudadana.
            </Panel>
            <Panel header="¿Dónde encuentro información sobre eventos públicos?" key="2">
              En el trámite llamado “Autorización de eventos públicos”, encontrarás toda la información.
            </Panel>
            <Panel header="¿Puedo hacer estos trámites en línea?" key="3">
              Algunos trámites están disponibles en línea, otros requieren presencia física. Verifica cada uno.
            </Panel>
          </Collapse>
        </div>
      </div>

      {/* Modal */}
      {tramiteSeleccionado && (
        <Modal
          title={tramiteSeleccionado.titulo}
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
        >
          <p>{tramiteSeleccionado.descripcion}</p>
          <Button type="primary" onClick={() => navigate(tramiteSeleccionado.ruta)}>
            Ver más detalles
          </Button>
        </Modal>
      )}
    </div>
  );
}
