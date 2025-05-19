import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('user'); // default role
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name.trim()) {
      const user = { name, role };
      onLogin(user);
      navigate(role === 'admin' ? '/admin' : '/user');
    } else {
      alert('Lütfen adınızı girin.');
    }
  };

  return (
    <div className="login-page">
      <h2>Giriş Yap</h2>
      <input
        type="text"
        placeholder="Adınızı girin"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">Kullanıcı</option>
        <option value="admin">İşletme (Admin)</option>
      </select>
      <button onClick={handleLogin}>Giriş Yap</button>
    </div>
  );
}

export default Login;
