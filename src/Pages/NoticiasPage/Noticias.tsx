import { useState } from 'react';
import { Card, Button, Select, Input, Modal, Pagination, Switch } from 'antd';
const { Option } = Select;
import { SearchOutlined, YoutubeOutlined, FacebookOutlined, TwitterOutlined, WhatsAppOutlined, FilePdfOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import { jsPDF } from "jspdf";

// Datos de ejemplo de noticias
interface News {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  image: string;
  content: string;
  youtubeLink?: string; // Enlace de YouTube opcional
}
const newsData: News[] = [
  {
    id: '1',
    title: 'Nueva ley de tránsito',
    summary: 'Se han aprobado nuevas regulaciones de tránsito que afectarán a los conductores...',
    date: '2025-04-20',
    category: 'Ley',
    image: 'https://tibiritacundinamarca.micolombiadigital.gov.co/sites/tibiritacundinamarca/content/files/000897/44830_feria-turistica-artesanal-y-gastronomica-tibirita-2025_1024x600.png',
    content: `📢 ✨ ¡Tibirita te espera! 🌿 🎭 🍽️
Te invitamos a la Feria Turística, Artesanal y Gastronómica Tibirita 2025, un evento lleno de cultura, tradición y sabores auténticos de la provincia de almeidas. 🏞️ 👨‍🌾
📅 Fecha: 23 de marzo
📍 Lugar: Tibirita, Cundinamarca
Disfruta de una jornada única con:
✅ Muestras artesanales 🎨
✅ Gastronomía típica 🍲 🌽
✅ Actividades culturales y turísticas 🎶 🏡
¡No te lo pierdas!
📌 Organiza: Alcaldía de Tibirita`,
    youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Enlace a YouTube
  },
  {
    id: '2',
    title: 'Festival cultural en Tibirita',
    summary: 'El ferias y fisetas de Tibirita está programado para el próximo mes con actividades para todos...',
    date: '2025-04-18',
    category: 'Cultura',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShYRzAf1HrtEdNSzZ_92S6tzj2DOuQ_wIAsA&s',
    content: 'Estas ferias y fiestas incluirá conciertos, exposiciones y actividades para todas las edades...',
    youtubeLink: 'https://youtu.be/XcWeYhrcVKU?si=mtFoOVKdGa-5u6Hr', // Puedes cambiar el enlace aquí también
  },
];

export default function Noticias() {
  const [categoria, setCategoria] = useState<string>('');  // Filtro por categoría
  const [busqueda, setBusqueda] = useState<string>('');  // Filtro por búsqueda
  const [paginaActual, setPaginaActual] = useState<number>(1);  // Página actual
  const [modalVisible, setModalVisible] = useState<boolean>(false);  // Controla la visibilidad del modal
  const [selectedNews, setSelectedNews] = useState<News | null>(null);  // Noticia seleccionada
  const [modoOscuro, setModoOscuro] = useState<boolean>(false);  // Modo oscuro
  const [] = useState<number>(0);  // Contador de noticias
  const noticiasPorPagina = 6;

  const handleChangePage = (page: number) => setPaginaActual(page);  // Cambiar de página

  const noticiasFiltradas = newsData.filter(
    (n) =>
      n.title.toLowerCase().includes(busqueda.toLowerCase()) &&
      (!categoria || n.category === categoria)
  );

  const noticiasPaginadas = noticiasFiltradas.slice(
    (paginaActual - 1) * noticiasPorPagina,
    paginaActual * noticiasPorPagina
  );

  const showModal = (noticia: News) => {
    setSelectedNews(noticia);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedNews(null);
  };

  // Función para generar el PDF
  const generarPDF = () => {
    const doc = new jsPDF();
    doc.text(selectedNews?.title || '', 20, 20);
    doc.text(selectedNews?.content || '', 20, 30);
    doc.save(`${selectedNews?.title}.pdf`);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: modoOscuro ? '#333' : '#f0f2f5', padding: '20px' }}>
      <div
        style={{
          maxWidth: '1900px',
          width: '216%',
          margin: '0 auto',
          padding: '20px',
          backgroundColor: 'white',
          borderRadius: '15px',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Encabezado institucional con escudo */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <img
            src="https://unpscolombia2015.com/wp-content/uploads/2023/01/Alcaldia-San-Juan-De-Arama.jpg" // Aquí va el escudo
            alt="Escudo de Tibirita"
            style={{ width: '60px', height: '60px', marginRight: '15px' }}
          />
          <h1 style={{ fontSize: '2rem' }}>Alcaldía de Tibirita - Noticias</h1>
        </div>

        {/* Filtros */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <Input
            placeholder="Buscar noticias..."
            onChange={(e) => setBusqueda(e.target.value)}
            value={busqueda}
            style={{ flex: 1, minWidth: '250px' }}
            prefix={<SearchOutlined />}
            allowClear
            aria-label="Buscar noticia"
          />
          <Select
            placeholder="Filtrar por categoría"
            style={{ flex: 1, minWidth: '250px' }}
            onChange={setCategoria}
            value={categoria}
            allowClear
            aria-label="Filtrar por categoría"
          >
            <Option value="Ley">Ley</Option>
            <Option value="Cultura">Cultura</Option>
            <Option value="Eventos">Eventos</Option>
          </Select>

          {/* Toggle de modo oscuro */}
          <div>
            <Switch
              checked={modoOscuro}
              onChange={() => setModoOscuro(!modoOscuro)}
              checkedChildren="🌙"
              unCheckedChildren="🌞"
              aria-label="Modo oscuro"
            />
          </div>
        </div>

        {/* Noticias */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {noticiasPaginadas.map((noticia) => (
            <motion.div
              key={noticia.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card
                hoverable
                cover={
                  <img
                    alt="imagen"
                    src={noticia.image}
                    style={{ height: '150px', objectFit: 'cover', borderRadius: '15px', borderTopRightRadius: '0', borderTopLeftRadius: '15px' }}
                  />
                }
                style={{ borderRadius: '15px' }}
              >
                <h3>{noticia.title}</h3>
                <p>{noticia.summary}</p>
                <Button type="primary" onClick={() => showModal(noticia)}>
                  Ver más
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Paginación */}
        <Pagination
          current={paginaActual}
          total={noticiasFiltradas.length}
          pageSize={noticiasPorPagina}
          onChange={handleChangePage}
          style={{ textAlign: 'center', marginTop: '20px' }}
        />

        {/* Modal con información completa de la noticia */}
        <Modal
          title={selectedNews?.title}
          visible={modalVisible}
          onCancel={closeModal}
          footer={null}
          width={800}
        >
          <img alt="imagen" src={selectedNews?.image} style={{ width: '100%', marginBottom: '20px' }} />
          <p>{selectedNews?.content}</p>
          {selectedNews?.youtubeLink && (
            <Button
              type="primary"
              icon={<YoutubeOutlined />}
              onClick={() => window.open(selectedNews.youtubeLink, '_blank')}
              style={{ marginTop: '20px' }}
            >
              Ver en YouTube
            </Button>
          )}

          {/* Compartir en redes sociales */}
          <div style={{ marginTop: '20px' }}>
            <FacebookShareButton url={window.location.href}>
              <Button icon={<FacebookOutlined />} />
            </FacebookShareButton>
            <TwitterShareButton url={window.location.href}>
              <Button icon={<TwitterOutlined />} />
            </TwitterShareButton>
            <WhatsappShareButton url={window.location.href}>
              <Button icon={<WhatsAppOutlined />} />
            </WhatsappShareButton>
          </div>

          {/* Descargar noticia en PDF */}
          <Button
            icon={<FilePdfOutlined />}
            onClick={generarPDF}
            style={{ marginTop: '20px' }}
          >
            Descargar PDF
          </Button>
        </Modal>
      </div>

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
}
