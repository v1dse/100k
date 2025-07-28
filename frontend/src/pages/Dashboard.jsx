import StatCard from "../components/StatCard";
import ProgressBar from "../components/ProgressBar";
import NavigationBar from "../components/NavigationBar";
import "./Dashboard.css";
import axios from "axios";
import React, { useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext'; 
import logo from './assets/dashboard.png';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  ///
  ///useEffect(() => {
  ///  const fetchUser = async () => {
  ///    try {
  ///      const token = localStorage.getItem('token');
  ///      const res = await axios.get('/api/user/profile', {
  ///        headers: { Authorization: `Bearer ${token}` }
  ///      });
  ///      setUser(res.data);
  ///    } catch (err) {
  ///      console.error("Ошибка загрузки профиля:", err);
  ///      setUser(null);
  ///    }
  ///  };
  ///  fetchUser();
  ///}, []);
  ///
  ///if (!user) {
  ///  return <div className="text-center py-10 text-muted">Загрузка...</div>;
  ///}

  return (
    <div className="dashboard min-h-screen bg-background pb-20">
      <div className="dashboard-container max-w-md mx-auto px-6 py-8">
        {/* Header */}
        <div className="dashboard-header text-center mb-8">
          <div className="dashboard-title-card bg-card rounded-2xl px-6 py-3 inline-block mb-6">
            <h1 className="dashboard-title text-foreground text-lg font-bold">100KLAB</h1>
          </div>
        </div>

        {/* Avatar Section */}
        <div className="avatar-section relative bg-gradient-primary rounded-3xl p-8 mb-6 overflow-hidden">
          <img src={logo} alt="logo" className="dashboard-logo absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20" />
          <div className="greeting-card absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 px-6 py-3 rounded-2xl backdrop-blur-md bg-card/90">
            <h2 className="greeting-text text-card-foreground text-lg font-semibold">
              Привет, mikhail!
            </h2>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-wrapper mb-6">
  <div className="stats-left">
    <StatCard
      className="stats-card bg-gradient-to-r from-blue-500 to-blue-700"
      label="Ваша команда:"
      value="8 человек"
      variant="primary"
    />
  </div>
  <div className="stats-right">
    <StatCard
      className="stats-card bg-gradient-to-r from-blue-500 to-blue-700"
      label="Приглашено:"
      value="1 друг"
    />
    <StatCard
      className="stats-card bg-gradient-to-r from-blue-500 to-blue-700"
      label="Заработано:"
      value="€1000"
      variant="primary"
    />
  </div>
</div>

        {/* Progress Section */}
        <ProgressBar 
          progress={65} 
          startDate="15 июля" 
          endDate="15 октября" 
        />
      </div>
      <NavigationBar />
    </div>
  );
};

export default Dashboard;