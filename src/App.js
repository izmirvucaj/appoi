import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import UserPage from './pages/UserPage';
import AdminPage from './pages/AdminPage';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            currentUser ? (
              <Navigate to={currentUser.role === 'admin' ? '/admin' : '/user'} />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/user"
          element={
            currentUser && currentUser.role === 'user' ? (
              <UserPage user={currentUser} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/admin"
          element={
            currentUser && currentUser.role === 'admin' ? (
              <AdminPage admin={currentUser} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
