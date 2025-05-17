import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Input, Select, Card, Switch } from 'antd';
import CountUp from 'react-countup';
import { ArrowUpOutlined } from '@ant-design/icons';
import './testimonios.css';

const { Option } = Select;

interface Testimonio {
  id: number;
  nombre: string;
  mensaje: string;
  categoria: string;
}

const testimoniosIniciales: Testimonio[] = [
  { id: 1, nombre: 'María Gómez', mensaje: 'Excelente gestión por parte de la Alcaldía.', categoria: 'Ciudadano' },
  { id: 2, nombre: 'Pedro Ruiz', mensaje: 'Gracias por las mejoras en infraestructura.', categoria: 'Comerciante' },
  { id: 3, nombre: 'Laura Méndez', mensaje: 'Muy buen servicio al ciudadano.', categoria: 'Visitante' },
];

export default function TestimoniosPage() {
  const [testimonios, setTestimonios] = useState(testimoniosIniciales);
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [categoria, setCategoria] = useState('');
  const [filtro, setFiltro] = useState('');
  const [modoOscuro, setModoOscuro] = useState(false);

  const testimoniosFiltrados = testimonios.filter((t) =>
    filtro ? t.categoria === filtro : true
  );

  const agregarTestimonio = () => {
    if (nombre && mensaje && categoria) {
      const nuevo: Testimonio = {
        id: testimonios.length + 1,
        nombre,
        mensaje,
        categoria,
      };
      setTestimonios([...testimonios, nuevo]);
      setNombre('');
      setMensaje('');
      setCategoria('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`pagina-testimonios ${modoOscuro ? 'oscuro' : 'claro'}`}
      style={{
        width: '192%',
        maxWidth: '2000px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: modoOscuro ? '#1e1e1e' : '#f0f2f5',
      }}
    >
      <div className="encabezado">
        <img
          src="https://unpscolombia2015.com/wp-content/uploads/2023/01/Alcaldia-San-Juan-De-Arama.jpg"
          alt="Escudo Tibirita"
          className="escudo"
        />
        <h1 className="titulo" style={{ color: modoOscuro ? 'white' : 'black' }}>
          Testimonios y Participación Ciudadana
        </h1>
        <div className="modo-toggle">
          <Switch checked={modoOscuro} onChange={setModoOscuro} checkedChildren="🌙" unCheckedChildren="☀️" />
        </div>
      </div>

      <div className="contador">
        <p style={{ color: modoOscuro ? 'white' : 'black' }}>Total de testimonios recibidos:</p>
        <h2 style={{ color: modoOscuro ? 'white' : 'black' }}>
          <CountUp end={testimonios.length} duration={2} />
        </h2>
      </div>

      <div className="filtro">
        <Select
          placeholder="Filtrar por categoría"
          onChange={(value) => setFiltro(value)}
          allowClear
          className="select-categoria"
        >
          <Option value="Ciudadano">Ciudadano</Option>
          <Option value="Comerciante">Comerciante</Option>
          <Option value="Visitante">Visitante</Option>
        </Select>
      </div>

      <div className="tarjetas">
        {testimoniosFiltrados.map((t) => (
          <motion.div key={t.id} whileHover={{ scale: 1.03 }}>
            <Card
              title={t.nombre}
              bordered={false}
              className={`tarjeta ${modoOscuro ? 'oscuro' : 'claro'} ${
                t.categoria.toLowerCase()
              }`}
            >
              <p>{t.mensaje}</p>
              <p className="categoria-tag">{t.categoria}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="formulario">
        <h2 style={{ color: modoOscuro ? 'white' : 'black' }}>Envía tu testimonio</h2>
        <div className="campos">
          <Input
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <Select
            placeholder="Selecciona categoría"
            value={categoria}
            onChange={setCategoria}
            className="select-categoria"
          >
            <Option value="Ciudadano">Ciudadano</Option>
            <Option value="Comerciante">Comerciante</Option>
            <Option value="Visitante">Visitante</Option>
          </Select>
          <Input.TextArea
            rows={4}
            placeholder="Escribe tu testimonio"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
        </div>
        <Button type="primary" onClick={agregarTestimonio} className="boton-enviar">
          Enviar
        </Button>
      </div>

      <Button
        shape="circle"
        icon={<ArrowUpOutlined />}
        onClick={scrollToTop}
        className="boton-arriba"
      />
    </motion.div>
  );
}
