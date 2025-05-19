import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ user, onLogout }) {
  const navigate = useNavigate();
  return (
    <nav>
      <Link to="/">Randevu Uygulaması</Link>
      {user ? (
        <>
          <span>Merhaba, {user.name}</span>
          {user.role === 'admin' && <Link to="/admin">Admin Paneli</Link>}
          {user.role === 'user' && <Link to="/user">Randevularım</Link>}
          <button onClick={() => { onLogout(); navigate('/'); }}>Çıkış</button>
        </>
      ) : (
        <>
          <Link to="/">Giriş</Link>
          <Link to="/register">Kayıt</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
