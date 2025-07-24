import "./ProgressBar.css";

interface ProgressBarProps {
  progress: number;
  startDate: string;
  endDate: string;
}

const ProgressBar = ({ progress, startDate, endDate }: ProgressBarProps) => {
  return (
    <div className="progress-container">
      <div className="progress-wrapper">
        <div className="progress-track">
          <div 
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="progress-dates">
          <span>{startDate}</span>
          <span>{endDate}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;