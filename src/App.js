import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        <Navbar user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={
            user ? (
              user.role === 'admin' ? (
                <AdminPage />
              ) : (
                <UserPage userId={user.id} />
              )
            ) : (
              <Login onLogin={handleLogin} />
            )
          } />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;