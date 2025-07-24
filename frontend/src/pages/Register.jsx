import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async e => {
  e.preventDefault();
  try {
    // Отправляем данные на backend
    const res = await axios.post('/api/authRoutes/register', formData);
    // Ожидаем, что backend вернет объект пользователя с id
    if ((res.status === 201 || res.status === 200) && res.data.user && res.data.user.id) {
      // Переход на профиль пользователя
      navigate(`/profile/${res.data.user.id}`);
      localStorage.setItem('token', res.data.token);
    } else {
      // Если backend не вернул id, fallback на login
      navigate('/login');
    }
  } catch (err) {
    alert('Ошибка регистрации: ' + (err.response?.data?.message || err.message));
    console.error('Registration failed', err);
  }
};

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="form row" id="register">
        <div className="col-sm-12 container">
          <div className="input">
            <input
              className="main-form animated bounceInDown"
              type="text"
              name="username"
              placeholder="USERNAME"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <input
              className="main-form animated bounceInDown"
              type="email"
              name="email"
              placeholder="EMAIL ADDRESS"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <input
              className="main-form animated bounceInDown"
              type="password"
              name="password"
              placeholder="PASSWORD"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <button
              className="main-form btn animated bounceInDown"
              type="submit"
            >
              SIGN UP
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;