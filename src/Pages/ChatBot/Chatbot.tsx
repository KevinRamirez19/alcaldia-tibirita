import React, { useState } from 'react';

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '300px',
        height: '400px',
        backgroundColor: '#333', // Cambié el fondo para que tenga más contraste
        color: 'white', // Texto blanco para que sea visible
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        zIndex: 10000, // Aumenté el z-index
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          flex: '1',
          overflowY: 'auto',
          padding: '10px',
          borderBottom: '1px solid #444', // Cambié el color del borde
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              marginBottom: '10px',
              padding: '5px',
              backgroundColor: '#555', // Fondo gris para cada mensaje
              borderRadius: '5px',
            }}
          >
            {msg}
          </div>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          padding: '10px',
          borderTop: '1px solid #444', // Cambié el color del borde
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe un mensaje..."
          style={{
            flex: '1',
            padding: '8px',
            borderRadius: '5px',
            border: '1px solid #ddd',
            marginRight: '8px',
            color: '#333', // Color de texto del input
          }}
        />
        <button
          onClick={handleSendMessage}
          style={{
            padding: '8px 16px',
            backgroundColor: '#00703c',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
