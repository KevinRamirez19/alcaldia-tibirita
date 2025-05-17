import { Button } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const PoliticasPrivacidad = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: '40px 20px', minHeight: '100vh' }}>
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: '30px',
          color: '#000', // <- Color negro aplicado aquí
          fontFamily: 'Arial, sans-serif',
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
        }}
      >
        {/* Encabezado institucional */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
          <img
            src="https://unpscolombia2015.com/wp-content/uploads/2023/01/Alcaldia-San-Juan-De-Arama.jpg"
            alt="Escudo Tibirita"
            style={{ width: '60px', height: '60px', marginRight: '15px' }}
          />
          <h1 style={{ fontSize: '2rem' }}>Políticas de Privacidad</h1>
        </div>

        {/* Contenido */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <section style={{ marginBottom: '25px' }}>
            <h2>1. Introducción</h2>
            <p>
              En la Alcaldía de Tibirita nos comprometemos a proteger la privacidad de nuestros
              ciudadanos y usuarios. Esta política describe cómo recopilamos, usamos y protegemos su
              información personal.
            </p>
          </section>

          <section style={{ marginBottom: '25px' }}>
            <h2>2. Información que recopilamos</h2>
            <ul>
              <li>Nombre completo y datos de contacto.</li>
              <li>Información enviada a través de formularios o encuestas.</li>
              <li>Datos de navegación en nuestro sitio web.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '25px' }}>
            <h2>3. Uso de la información</h2>
            <p>
              Utilizamos sus datos para mejorar nuestros servicios, responder solicitudes,
              proporcionar información relevante, y garantizar la seguridad del sistema.
            </p>
          </section>

          <section style={{ marginBottom: '25px' }}>
            <h2>4. Compartir información</h2>
            <p>
              No compartimos su información con terceros, salvo obligación legal o con entidades
              oficiales para trámites autorizados.
            </p>
          </section>

          <section style={{ marginBottom: '25px' }}>
            <h2>5. Derechos del usuario</h2>
            <p>
              Usted puede acceder, actualizar o solicitar la eliminación de sus datos personales
              contactándonos a través de nuestros canales oficiales.
            </p>
          </section>

          <section style={{ marginBottom: '25px' }}>
            <h2>6. Mi Colombia Digital</h2>
            <p>
              A continuación podrás consultar los términos y condiciones y las políticas de privacidad de información y el tratamiento de datos personales de la solución que debes tener en cuenta para el uso correcto del servicio de portales territoriales ofrecidos por el Gobierno Digital; recuerda dar clic en los títulos para conocer más:
            </p>
            <ul>
              <li>Sobre las bases de datos.</li>
              <li>Sobre la adquisición de información.</li>
              <li>Sobre las copias de seguridad.</li>
              <li>Sobre el Registro de Usuario.</li>
              <li>Gestión de Sesiones Seguras.</li>
              <li>Términos y condiciones de uso Mi Colombia Digital.</li>
              <li>Políticas de privacidad y tratamiento de datos.</li>
              <li>Términos y condiciones de uso - Cuentas de correo.</li>
              <li>Uso de Cookies - Mi Colombia Digital.</li>
            </ul>
          </section>

          <section>
            <h2>7. Contacto</h2>
            <p>
              Si tiene preguntas sobre esta política, comuníquese con nosotros a
              <strong> alcaldia@tibirita-cundinamarca.gov.co</strong>.
            </p>
          </section>
        </motion.div>
      </div>

      {/* Botón volver arriba */}
      <Button
        type="primary"
        shape="circle"
        icon={<ArrowUpOutlined />}
        onClick={() => window.scrollTo(0, 0)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
        }}
      />
    </div>
  );
};

export default PoliticasPrivacidad;
