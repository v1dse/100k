import React, { useState } from 'react';
import './Analytics.css';
import NavigationBar from "../components/NavigationBar";

const Analytics = () => {
  const [activeTab, setActiveTab] = useState('month');

  const analyticsData = {
    week: {
      totalViews: '156K',
      totalFollowers: '156K',
      viewsGrowth: 18,
      followersGrowth: 18,
      platforms: [
        { name: 'Instagram', icon: '📷', followers: '67K', growth: 15 },
        { name: 'TikTok', icon: '🎵', followers: '45K', growth: 22 },
        { name: 'Facebook', icon: '📘', followers: '28K', growth: 8 },
        { name: 'YouTube', icon: '📺', followers: '16K', growth: 12 }
      ]
    },
    month: {
      totalViews: '256K',
      totalFollowers: '256K',
      viewsGrowth: 24,
      followersGrowth: 24,
      platforms: [
        { name: 'Instagram', icon: '📷', followers: '112K', growth: 20 },
        { name: 'TikTok', icon: '🎵', followers: '98.4K', growth: 29 },
        { name: 'Facebook', icon: '📘', followers: '32.1K', growth: 8 },
        { name: 'YouTube', icon: '📺', followers: '13.5K', growth: 12 }
      ]
    },
    quarter: {
      totalViews: '456K',
      totalFollowers: '456K',
      viewsGrowth: 32,
      followersGrowth: 32,
      platforms: [
        { name: 'Instagram', icon: '📷', followers: '198K', growth: 28 },
        { name: 'TikTok', icon: '🎵', followers: '165K', growth: 35 },
        { name: 'Facebook', icon: '📘', followers: '56K', growth: 15 },
        { name: 'YouTube', icon: '📺', followers: '37K', growth: 18 }
      ]
    },
    halfYear: {
      totalViews: '756K',
      totalFollowers: '756K',
      viewsGrowth: 45,
      followersGrowth: 45,
      platforms: [
        { name: 'Instagram', icon: '📷', followers: '298K', growth: 38 },
        { name: 'TikTok', icon: '🎵', followers: '245K', growth: 42 },
        { name: 'Facebook', icon: '📘', followers: '125K', growth: 25 },
        { name: 'YouTube', icon: '📺', followers: '88K', growth: 28 }
      ]
    }
  };

  const currentData = analyticsData[activeTab];

  const tabs = [
    { key: 'week', label: 'Неделя' },
    { key: 'month', label: 'Месяц' },
    { key: 'quarter', label: '3 Месяца' },
    { key: 'halfYear', label: '6 Месяцев' }
  ];

  const periodLabelMap = {
  week: "7 дней",
  month: "30 дней",
  quarter: "3 месяца",
  halfYear: "6 месяцев"
};

  return (
    <div className="social-analytics">
      <div className="analytics-header">
        <h2 className="analytics-title">АНАЛИТИКА</h2>
        <div className="analytics-period">{periodLabelMap[activeTab]}</div>
      </div>

      <div className="analytics-stats">
        <div className="stat-block">
          <div className="stat-number">{currentData.totalViews}</div>
          <div className="stat-label">ПРОСМОТРОВ</div>
          <div className={`stat-growth ${currentData.viewsGrowth >= 0 ? 'income' : 'expense'}`}>
            {currentData.viewsGrowth >= 0 ? '+' : ''}{currentData.viewsGrowth}% по сравнению с предыдущими 30 днями
          </div>
        </div>

        <div className="stat-block">
          <div className="stat-number">{currentData.totalFollowers}</div>
          <div className="stat-label">ПОДПИСЧИКОВ</div>
          <div className={`stat-growth ${currentData.followersGrowth >= 0 ? 'income' : 'expense'}`}>
            {currentData.followersGrowth >= 0 ? '+' : ''}{currentData.followersGrowth}% по сравнению с предыдущими 30 днями
          </div>
        </div>
      </div>

      <div className="analytics-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`tab-button ${activeTab === tab.key ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="platforms-list">
        {currentData.platforms.map((platform, index) => (
          <div key={index} className="platform-item">
            <div className="platform-info">
              <div className="platform-icon">{platform.icon}</div>
              <span className="platform-name">{platform.name}</span>
            </div>
            <div className="platform-stats">
              <div className="platform-followers">{platform.followers}</div>
              <div className={`platform-growth ${platform.growth >= 0 ? 'income' : 'expense'}`}>
                {platform.growth >= 0 ? '+' : ''}{platform.growth}%
              </div>
            </div>
            
          </div>
          
        ))}
      </div>
        <div className='clear'></div>
      <NavigationBar />
    </div>
  );
};

export default Analytics;