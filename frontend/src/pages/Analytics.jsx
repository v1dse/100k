import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Calendar, Trophy, Users, Target } from "lucide-react";
import NavigationBar from '../components/NavigationBar';


const Analytics = () => {
  const { user } = useAuth();
  const achievements = [
    { 
      id: 1, 
      icon: Trophy, 
      title: "Первые €1000", 
      description: "Достигнута первая цель", 
      date: "15 окт", 
      reward: "+€100 бонус" 
    },
    { 
      id: 2, 
      icon: Users, 
      title: "Команда из 5 человек", 
      description: "Собрана активная команда", 
      date: "10 окт", 
      reward: "+€50 бонус" 
    },
    { 
      id: 3, 
      icon: Target, 
      title: "Первый реферал", 
      description: "Приглашен первый друг", 
      date: "05 окт", 
      reward: "+€25 бонус" 
    },
  ];

  const activities = [
    { date: "Сегодня", events: ["Получен бонус €250", "Приглашен новый участник"] },
    { date: "Вчера", events: ["Командное достижение", "Обновление профиля"] },
    { date: "2 дня назад", events: ["Вывод средств €100", "Участие в вебинаре"] },
  ];


  return (
    <div>
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Аналитика соцсетей</h2>
      {user?.analytics ? (
        <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(user.analytics, null, 2)}</pre>
      ) : (
        <p>Нет данных по привязанным аккаунтам.</p>
      )}
    </div>

  

    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-md mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">История</h1>
          <p className="text-muted-foreground">Ваши достижения и активность</p>
        </div>

        {/* Achievements Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Trophy size={20} className="text-primary" />
            Достижения
          </h2>
          <div className="space-y-4">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <div key={achievement.id} className="bg-card rounded-2xl p-4 hover:bg-card/80 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-xl">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">{achievement.date}</span>
                        <span className="text-sm font-medium text-primary">{achievement.reward}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Activity Timeline */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Calendar size={20} className="text-primary" />
            Активность
          </h2>
          <div className="space-y-6">
            {activities.map((day, index) => (
              <div key={index} className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <h3 className="font-medium text-foreground">{day.date}</h3>
                </div>
                <div className="ml-6 space-y-2">
                  {day.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="bg-secondary/50 rounded-xl p-3">
                      <p className="text-sm text-foreground">{event}</p>
                    </div>
                  ))}
                </div>
                {index < activities.length - 1 && (
                  <div className="absolute left-1.5 top-6 w-0.5 h-12 bg-border"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        <NavigationBar />
      </div>
    </div>
    </div>
    );
};


export default Analytics;