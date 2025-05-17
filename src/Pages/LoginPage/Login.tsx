import { useState } from 'react';
import { Input, Button, Modal, message } from 'antd';
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  MailOutlined,
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import '../LoginPage/Login.css'; // Importa tu archivo CSS aquí

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Registro
  const [nombre, setNombre] = useState('');
  const [emailReg, setEmailReg] = useState('');
  const [passReg, setPassReg] = useState('');
  const [confirmReg, setConfirmReg] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      message.warning('Por favor completa todos los campos');
      return;
    }
    message.success('Inicio de sesión exitoso');
  };

  const handleRegister = () => {
    if (!nombre || !emailReg || !passReg || !confirmReg) {
      message.warning('Por favor completa todos los campos');
      return;
    }
    if (passReg !== confirmReg) {
      message.error('Las contraseñas no coinciden');
      return;
    }

    message.success('Registro exitoso');
    setIsModalVisible(false);
    // Limpiar campos
    setNombre('');
    setEmailReg('');
    setPassReg('');
    setConfirmReg('');
  };

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        backgroundImage: 'url(https://www.viajarenverano.com/wp-content/uploads/2017/10/Tibirita-Cupula1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
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
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <motion.img
            src="https://unpscolombia2015.com/wp-content/uploads/2023/01/Alcaldia-San-Juan-De-Arama.jpg"
            alt="Escudo Tibirita"
            style={{ width: '60px', marginBottom: '10px' }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          />
          <h2 style={{ marginBottom: 0 }}>Inicio de Sesión</h2>
          <p style={{ fontSize: '14px', color: '#888' }}>Bienvenido al sistema institucional</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Input.Password
            placeholder="Contraseña"
            prefix={<LockOutlined />}
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: '30px' }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button type="primary" block onClick={handleLogin}>
            Iniciar Sesión
          </Button>
          <p style={{ textAlign: 'center', marginTop: '20px' }}>
            ¿No tienes una cuenta?{' '}
            <Button type="link" onClick={() => setIsModalVisible(true)}>
              Regístrate
            </Button>
          </p>
        </motion.div>
      </motion.div>

      {/* Modal de Registro */}
      <Modal
        title="Registro de Usuario"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Input
          placeholder="Nombre completo"
          prefix={<UserOutlined />}
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={{ marginBottom: '15px' }}
        />
        <Input
          placeholder="Correo electrónico"
          prefix={<MailOutlined />}
          type="email"
          value={emailReg}
          onChange={(e) => setEmailReg(e.target.value)}
          style={{ marginBottom: '15px' }}
        />
        <Input.Password
          placeholder="Contraseña"
          prefix={<LockOutlined />}
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          value={passReg}
          onChange={(e) => setPassReg(e.target.value)}
          style={{ marginBottom: '15px' }}
        />
        <Input.Password
          placeholder="Confirmar contraseña"
          prefix={<LockOutlined />}
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          value={confirmReg}
          onChange={(e) => setConfirmReg(e.target.value)}
          style={{ marginBottom: '20px' }}
        />
        <Button type="primary" block onClick={handleRegister}>
          Registrarse
        </Button>
      </Modal>
    </div>
  );
};

export default Login;
