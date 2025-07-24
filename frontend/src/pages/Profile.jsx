import React, { useState, useEffect } from 'react';
import {
  Settings,
  Bell,
  HelpCircle,
  LogOut,
  Edit,
  Star,
  Instagram,
  Twitter,
  Youtube,
  Github,
  Linkedin,
  Navigation,
} from "lucide-react";
import "./Profile.css";
import axios from "axios";
import logo from './assets/dashboard.png';
import NavigationBar from '../components/NavigationBar';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/api/user/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(res.data);
      } catch (err) {
        console.error("Ошибка загрузки профиля:", err);
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  if (!user) {
    return <div className="text-center py-10 text-muted">Загрузка...</div>;
  }

  const userStats = [
    { label: "Уровень", value: user.level, color: "text-primary" },
    { label: "Рейтинг", value: user.rating, color: "text-yellow-500" },
    { label: "Дней в системе", value: user.daysInSystem, color: "text-green-500" },
  ];

  const socialMedia = [
    { icon: Instagram, name: "Instagram", username: "@mikhail_dev", connected: true, color: "text-pink-500" },
    { icon: Twitter, name: "Twitter", username: "@mikhail_dev", connected: true, color: "text-blue-400" },
    { icon: Youtube, name: "YouTube", username: "Mikhail Channel", connected: false, color: "text-red-500" },
    { icon: Github, name: "GitHub", username: "mikhail-dev", connected: true, color: "text-gray-400" },
    { icon: Linkedin, name: "LinkedIn", username: "mikhail-developer", connected: false, color: "text-blue-600" },
  ];

  const menuItems = [
    { icon: Edit, label: "Редактировать профиль", action: () => {} },
    { icon: Bell, label: "Уведомления", action: () => {} },
    { icon: Settings, label: "Настройки", action: () => {} },
    { icon: HelpCircle, label: "Помощь", action: () => {} },
    { icon: LogOut, label: "Выйти", action: () => {}, danger: true },
  ];

  return (
    <div className="profile-container">
      <div className="profile-content">
        {/* Header */}
        <div className="profile-header fade-in">
          <h1 className="profile-title">Профиль</h1>
          <p className="profile-subtitle">Управление аккаунтом</p>
        </div>

        {/* Profile Card */}
        <div className="profile-card fade-in">
          <div className="profile-info">
            <div className="profile-avatar">
              <span><img src={logo} alt="" /></span>
            </div>
            <h2 className="profile-name">{user.username}</h2>
            <p className="profile-email">{user.email}</p>

            {/* User Stats */}
            <div className="user-stats">
              {userStats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-value">
                    {stat.label === "Рейтинг" && <Star size={14} className="text-yellow-400" />}
                    <span>{stat.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Connections */}
        <div className="social-section slide-in">
          <h3 className="social-title">Социальные сети</h3>
          <div className="social-list">
            {socialMedia.map((social, index) => {
              const Icon = social.icon;
              const iconClass = social.name.toLowerCase().replace(/\s+/g, '');
              return (
                <div key={index} className="social-item">
                  <div className="social-info">
                    <div className={`social-icon ${iconClass}`}>
                      <Icon size={20} />
                    </div>
                    <div className="social-details">
                      <h4>{social.name}</h4>
                      <p>
                        {social.connected ? social.username : "Не подключено"}
                      </p>
                    </div>
                  </div>
                  <button 
                    className={`social-button ${
                      social.connected ? "connected" : "disconnected"
                    }`}
                  >
                    {social.connected ? "Отключить" : "Подключить"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Menu Items */}
        <div className="menu-section slide-in">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={item.action}
                className={`menu-item ${item.danger ? "danger" : ""}`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* App Info */}
        <div className="app-info fade-in">
          <p className="app-version">100KLAB v1.0.0</p>
          <p className="app-copyright">© 2025 Все права защищены</p>
        </div>
      </div>
      <div className='adad'>

      </div>
      <div>
        <NavigationBar />
      </div>
    </div>
  );
};

export default Profile;