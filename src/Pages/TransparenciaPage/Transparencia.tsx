import React, { useState, useEffect } from 'react';
import { Card, Input, Select, Switch, Tooltip, Button, FloatButton } from 'antd';
import { FilePdfOutlined, FileExcelOutlined, FileWordOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Option } = Select;

const documentos = [
  { nombre: 'Informe de gestión 2024', año: '2024', dependencia: 'Planeación', formato: 'pdf', url: '#' },
  { nombre: 'Presupuesto ejecutado 2023', año: '2023', dependencia: 'Tesorería', formato: 'excel', url: '#' },
  { nombre: 'Acta de comité 2024', año: '2024', dependencia: 'Educación', formato: 'word', url: '#' },
];

const Transparencia = () => {
  const [modoOscuro, setModoOscuro] = useState(false);
  const [busqueda, setBusqueda] = useState('');
  const [filtroAño, setFiltroAño] = useState<string | undefined>(undefined);
  const [filtroDependencia, setFiltroDependencia] = useState<string | undefined>(undefined);

  const toggleModo = () => setModoOscuro(!modoOscuro);

  const filtrarDocumentos = documentos.filter((doc) => {
    const coincideBusqueda = doc.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideAño = filtroAño ? doc.año === filtroAño : true;
    const coincideDependencia = filtroDependencia ? doc.dependencia === filtroDependencia : true;
    return coincideBusqueda && coincideAño && coincideDependencia;
  });

  const obtenerIcono = (formato: string) => {
    switch (formato) {
      case 'pdf': return <FilePdfOutlined style={{ color: 'red', fontSize: 24 }} />;
      case 'excel': return <FileExcelOutlined style={{ color: 'green', fontSize: 24 }} />;
      case 'word': return <FileWordOutlined style={{ color: 'blue', fontSize: 24 }} />;
      default: return null;
    }
  };

  const containerStyle: React.CSSProperties = {
    padding: '20px',
    width: '200%',
    minHeight: '100vh',
    backgroundColor: modoOscuro ? '#1f1f1f' : '#f9f9f9',
    color: modoOscuro ? '#fff' : '#000',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const cardContainer: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div style={containerStyle}>
      {/* Encabezado */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: 'center', marginBottom: '30px' }}
      >
        <img
          src="https://unpscolombia2015.com/wp-content/uploads/2023/01/Alcaldia-San-Juan-De-Arama.jpg"
          alt="Escudo Tibirita"
          style={{ height: '80px' }}
        />
        <h1 style={{ marginTop: '10px' }}>Portal de Transparencia</h1>
      </motion.div>

      {/* Filtros */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
        <Input
          placeholder="Buscar documentos"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{ minWidth: '200px' }}
        />
        <Select
          placeholder="Año"
          value={filtroAño}
          onChange={setFiltroAño}
          allowClear
          style={{ minWidth: '120px' }}
        >
          <Option value="2024">2024</Option>
          <Option value="2023">2023</Option>
        </Select>
        <Select
          placeholder="Dependencia"
          value={filtroDependencia}
          onChange={setFiltroDependencia}
          allowClear
          style={{ minWidth: '150px' }}
        >
          <Option value="Planeación">Planeación</Option>
          <Option value="Tesorería">Tesorería</Option>
          <Option value="Educación">Educación</Option>
        </Select>
        <Tooltip title="Modo oscuro / claro">
          <Switch checked={modoOscuro} onChange={toggleModo} />
        </Tooltip>
      </div>

      {/* Tarjetas de documentos */}
      <div style={cardContainer}>
        {filtrarDocumentos.map((doc, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card
              title={<span>{obtenerIcono(doc.formato)} {doc.nombre}</span>}
              bordered
              style={{ borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            >
              <p><strong>Año:</strong> {doc.año}</p>
              <p><strong>Dependencia:</strong> {doc.dependencia}</p>
              <Button type="primary" href={doc.url} target="_blank">Ver documento</Button>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Contador */}
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}>
          Total documentos: <strong>{filtrarDocumentos.length}</strong>
        </motion.div>
      </div>

      {/* Botón flotante */}
      <FloatButton
        icon={<ArrowUpOutlined />}
        tooltip="Volver arriba"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
    </div>
  );
};

export default Transparencia;
