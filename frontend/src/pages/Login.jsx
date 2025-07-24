import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  useEffect(() => {
    const handleScriptLoad = () => {
      const tg = window.Telegram?.WebApp;
      if (tg && tg.initData) {
        tg.ready();
        tg.expand();
        try { tg.requestFullscreen(); } catch (e) { console.log("Old Telegram - fullscreen", e); }
        try { tg.lockOrientation(); } catch (e) { console.log("Old Telegram - orientation", e); }
        try { tg.disableVerticalSwipes(); } catch (e) { console.log("Old Telegram - swipes", e); }
        try { tg.enableClosingConfirmation(); } catch (e) { console.log("Old Telegram - close confirm", e); }
      }
    };

    handleScriptLoad();
  }, []);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/authRoutes/login', formData);
      if (res.status === 200 && res.data.user) {
        localStorage.setItem('token', res.data.token);
        navigate(`/dashboard/${res.data.user.id}`);
        console.log('Login success:', res.data);
      }
    } catch (err) {
      console.error('Login failed', err);
    }
  };

  return (
    <div className="login-container">
      <hgroup>
        <h1>Login</h1>
      </hgroup>
      <div className="login-form">       
        <form onSubmit={handleSubmit}>
        <div className="group">
          <input
            type="email"
            name="email"
            placeholder="EMAIL"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <span className="highlight"></span>
          <span className="bar"></span>
        </div>
        <div className="group">
          <input
            type="password"
            name="password"
            placeholder="PASSWORD"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <span className="highlight"></span>
          <span className="bar"></span>
        </div>
        <div className="links">
          <Link to="/register">Don't have an account?</Link>
        </div>
        <button type="submit" className="button buttonBlue">
          Login
          <div className="ripples buttonRipples">
            <span className="ripplesCircle"></span>
          </div>
        </button>
      </form>
      </div>
    </div>
  );
};

export default Login;
