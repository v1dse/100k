import React from "react";
import NavigationBar from "../components/NavigationBar";
import { CheckCircle } from "lucide-react";
import "./Analytics.css";

const Analytics = () => {
  const team = [
    {
      name: "Mikhail",
      role: "Основатель",
      email: "vlad@example.com",
      avatar: "https://ui-avatars.com/api/?name=Mikhail&background=4285f4&color=fff&size=64",
      verified: true,
    },
    {
      name: "Анна Карпенко",
      role: "Маркетолог",
      email: "anna@example.com",
      avatar: "https://ui-avatars.com/api/?name=Anna+Karpenko&background=4285f4&color=fff&size=64",
      verified: true,
    },
    {
      name: "Илья Демченко",
      role: "Разработчик",
      email: "ilya@example.com",
      avatar: "https://ui-avatars.com/api/?name=Ilya+Demchenko&background=4285f4&color=fff&size=64",
      verified: true,
    },
    {
      name: "Артем Асташ",
      role: "100КLAB-Дизайнер",
      email: "artem@example.com",
      avatar: "https://ui-avatars.com/api/?name=Artem+Astash&background=4285f4&color=fff&size=64",
      verified: true,
    },
    {
      name: "Елена Волкова",
      role: "QA Инженер",
      email: "elena@example.com",
      avatar: "https://ui-avatars.com/api/?name=Elena+Volkova&background=4285f4&color=fff&size=64",
      verified: true,
    },
    {
      name: "Дмитрий Сидоров",
      role: "DevOps",
      email: "dmitry@example.com",
      avatar: "https://ui-avatars.com/api/?name=Dmitry+Sidorov&background=4285f4&color=fff&size=64",
      verified: true,
    },
  ];

  return (
    <div className="analytics-container">
      <div className="analytics-content">
        {/* Header */}
        <div className="analytics-header">
          <div className="team-badge">
            <span className="team-badge-text">КОМАНДА</span>
          </div>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {team.map((member, idx) => (
            <div key={idx} className="team-card">
              {/* Verification Badge */}
              {member.verified && (
                <div className="verification-badge">
                  <CheckCircle className="verification-icon" />
                </div>
              )}

              {/* Avatar */}
              <div className="avatar-container">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="avatar-image"
                />
              </div>

              {/* Name */}
              <h3 className="member-name">
                {member.name}
              </h3>

              {/* Role Badge */}
              <div className="role-badge-container">
                <span className="role-badge">
                  {member.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <NavigationBar />
    </div>
  );
};

export default Analytics;