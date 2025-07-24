import { CreditCard, Send, Download, Plus, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import "./Payments.css";

const Wallet = () => {
  const [showBalance, setShowBalance] = useState(true);

  const transactions = [
    { id: 1, amount: "+€250", description: "Реферальная программа", date: "Сегодня, 14:30" },
    { id: 2, amount: "-€50", description: "Комиссия за вывод", date: "Вчера, 09:15" },
    { id: 3, amount: "+€150", description: "Бонус команды", date: "2 дня назад" },
    { id: 4, amount: "+€300", description: "Ежемесячный доход", date: "5 дней назад" },
  ];

  const quickActions = [
    { icon: Send, label: "Отправить", color: "bg-blue-500" },
    { icon: Download, label: "Получить", color: "bg-green-500" },
    { icon: Plus, label: "Пополнить", color: "bg-purple-500" },
    { icon: CreditCard, label: "Карты", color: "bg-orange-500" },
  ];

  

  return (
    <div className="wallet">
      <div className="wallet-container">
        {/* Header */}
        <div className="wallet-header">
          <h1 className="wallet-title">Кошелек</h1>
          <p className="wallet-subtitle">Управление финансами</p>
        </div>

        {/* Balance Card */}
        <div className="balance-card">
          <div className="balance-info">
            <div className="balance-top">
              <span>Общий баланс</span>
              <button
                onClick={() => setShowBalance(!showBalance)}
                className="eye"
              >
                {showBalance ? <Eye size={16} /> : <EyeOff size={16} />}
              </button>
            </div>
            <div className="balance-amount">
              {showBalance ? "€ 1,247.50" : "€ ••••••"}
            </div>
            <div className="balance-label">Доступно для вывода</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button key={index} className="quick-action-btn">
                <div className={`quick-icon ${action.color}`}>
                  <Icon size={20} />
                </div>
                <span className="text-xs font-medium text-foreground">{action.label}</span>
              </button>
            );
          })}
        </div>

        {/* Recent Transactions */}
        <div className="transactions-card">
          <h3 className="transactions-title">Последние операции</h3>
          <div className="operations space-y-4">
            {transactions.map((transaction) => {
              const isIncome = transaction.amount.startsWith("+");
              return (
                <div key={transaction.id} className="transaction-item">
                  <div className="transaction-left">
                    <div className={`transaction-icon ${isIncome ? 'income' : 'expense'}`}>
                      {isIncome ? (
                        <Download size={16} className="text-green-500" />
                      ) : (
                        <Send size={16} className="text-red-500" />
                      )}
                    </div>
                    <div className="transaction-texts">
                      <p className="transaction-title">{transaction.description}</p>
                      <span className="transaction-date">{transaction.date}</span>
                    </div>
                  </div>
                  <span className={`transaction-amount ${isIncome ? 'income' : 'expense'}`}>
                    {transaction.amount}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;