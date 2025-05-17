import { useState } from 'react';
import { Input, Button, message } from 'antd';
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  MailOutlined,
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../LoginPage/Login.css'; // Importa tu archivo CSS aquí

const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmar, setConfirmar] = useState('');

  const handleRegister = () => {
    if (!nombre || !email || !password || !confirmar) {
      message.warning('Por favor completa todos los campos');
      return;
    }

    if (password !== confirmar) {
      message.error('Las contraseñas no coinciden');
      return;
    }

    // Aquí puedes agregar lógica para enviar los datos a un API
    message.success('Registro exitoso');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f0f2f5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          backgroundColor: '#fff',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        {/* Encabezado */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <motion.img
            src="https://unpscolombia2015.com/wp-content/uploads/2023/01/Alcaldia-San-Juan-De-Arama.jpg"
            alt="Escudo Tibirita"
            style={{ width: '60px', marginBottom: '10px' }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          />
          <h2 style={{ marginBottom: 0 }}>Registro de Usuario</h2>
          <p style={{ fontSize: '14px', color: '#888' }}>
            Crea tu cuenta institucional
          </p>
        </div>

        {/* Formulario */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Input
            placeholder="Nombre completo"
            prefix={<UserOutlined />}
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={{ marginBottom: '20px' }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Input
            placeholder="Correo electrónico"
            prefix={<MailOutlined />}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: '20px' }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Input.Password
            placeholder="Contraseña"
            prefix={<LockOutlined />}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: '20px' }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Input.Password
            placeholder="Confirmar contraseña"
            prefix={<LockOutlined />}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            value={confirmar}
            onChange={(e) => setConfirmar(e.target.value)}
            style={{ marginBottom: '30px' }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button type="primary" block onClick={handleRegister}>
            Registrarse
          </Button>
          <p style={{ textAlign: 'center', marginTop: '20px' }}>
            ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Registro;
