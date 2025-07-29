import { Home, Wallet, Clock, User, Command } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import "./NavigationBar.css"; 
import classNames from "classnames";

const NavigationBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { icon: Home, path: "/dashboard" },
    { icon: Wallet, path: "/wallet" },
    {icon: Command, path: "/comand"},
    { icon: Clock, path: "/analytics"  },
    { icon: User, path: "/profile" },

  ];

  return (
    <div className="navigation-bar">
      <div className="navigation-container">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={classNames("nav-button", {
                active: isActive,
                inactive: !isActive,
              })}
            >
              <Icon size={20} />
              <span className="nav-label">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default NavigationBar;