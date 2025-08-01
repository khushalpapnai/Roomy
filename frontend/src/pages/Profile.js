import React, { useContext } from 'react';
import { UserContext } from '../App';

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <div style={{textAlign:'center',marginTop:'2rem'}}>Not logged in.</div>;

  return (
    <div style={{
      maxWidth: 400,
      margin: '2rem auto',
      background: '#fff',
      borderRadius: 12,
      boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <div style={{
        width: 80,
        height: 80,
        borderRadius: '50%',
        background: '#1976d2',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700,
        fontSize: 36,
        margin: '0 auto 1rem auto'
      }}>
        {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
      </div>
      <h2 style={{marginBottom:8}}>{user.name}</h2>
      <div style={{color:'#555', marginBottom:8}}><b>Role:</b> {user.role.charAt(0).toUpperCase() + user.role.slice(1)}</div>
      <div style={{color:'#555', marginBottom:8}}><b>Email:</b> {user.email}</div>
      <div style={{color:'#555', marginBottom:8}}><b>City:</b> {user.city}</div>
      <div style={{color:'#555', marginBottom:8}}><b>Verified:</b> {user.isVerified ? 'Yes' : 'No'}</div>
    </div>
  );
};

export default Profile;
