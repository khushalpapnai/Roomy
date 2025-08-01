import React, { useState } from 'react';

const Signup = () => {
  const [role, setRole] = useState('tenant');
  return (
    <div>
      <h2>Sign Up</h2>
      <label>
        <input type="radio" value="tenant" checked={role === 'tenant'} onChange={() => setRole('tenant')} />
        Tenant
      </label>
      <label>
        <input type="radio" value="landlord" checked={role === 'landlord'} onChange={() => setRole('landlord')} />
        Landlord
      </label>
      <form>
        <input type="text" placeholder="Name" required /><br />
        <input type="email" placeholder="Email" required /><br />
        <input type="password" placeholder="Password" required /><br />
        <button type="submit">Register as {role.charAt(0).toUpperCase() + role.slice(1)}</button>
      </form>
    </div>
  );
};

export default Signup;
