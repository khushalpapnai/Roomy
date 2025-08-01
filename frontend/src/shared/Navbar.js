import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const Navbar = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate('/profile');
  };

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      {!user && <Link to="/login">Login</Link>}
      {!user && <Link to="/signup">Sign Up</Link>}
      {user && (
        <>
          <button onClick={handleProfile} style={{
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginLeft: 16
          }}>
            <div style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: '#1976d2',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: 18
            }}>
              {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
            </div>
            Profile
          </button>
          <button onClick={logout} style={{ marginLeft: 8, background: 'none', border: 'none', color: '#1976d2', cursor: 'pointer', fontWeight: 500 }}>Logout</button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
