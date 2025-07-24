import "./StatCard.css"; 

interface StatCardProps {
  label: string;
  value: string;
  variant?: "primary" | "secondary";
}

const StatCard = ({ label, value, variant = "secondary" }: StatCardProps) => {
  return (

    <div
      className={`stat-card  rounded-2xl p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
        variant === "primary"
          ? "primary bg-primary text-primary-foreground shadow-glow"
          : "secondary bg-secondary/50 text-foreground border border-border/50"
      }`}
    >
      <div className="stat-card-label text-sm text-muted-foreground mb-1">{label}</div>
      <div className="stat-card-value text-lg font-bold">{value}</div>
    </div>
  );
};

export default StatCard;