// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import FormInput from '../components/FormInput';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password123') {
      navigate('/admin-dashboard');
    } else if (username === 'hospital' && password === 'hospital123') {
      navigate('/hospital-dashboard');
    } else if (username === 'vendor' && password === 'vendor123') {
      navigate('/vendor-dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="section-title">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <FormInput
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
          <FormInput
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
 