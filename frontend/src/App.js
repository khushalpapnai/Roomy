import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './shared/Navbar';
import Home from './pages/Home';
import RoomDetail from './pages/RoomDetail';
import Login from './authentication/Login';
import Signup from './authentication/Signup';

import Profile from './pages/Profile';

export const UserContext = React.createContext();

function App() {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('roomyUser');
    return saved ? JSON.parse(saved) : null;
  });

  const login = (userObj) => {
    setUser(userObj);
    localStorage.setItem('roomyUser', JSON.stringify(userObj));
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem('roomyUser');
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      <Router>
        <Navbar />
        <div className="App" style={{ padding: '1rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/room/:id" element={<RoomDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
