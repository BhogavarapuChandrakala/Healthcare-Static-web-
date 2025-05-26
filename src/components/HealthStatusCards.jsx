
import { healthCards } from '../data/healthStatus';
import * as LucideIcons from 'lucide-react';

const HealthStatusCards = () => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'healthy': return 'status-healthy';
      case 'warning': return 'status-warning';
      case 'alert': return 'status-alert';
      default: return '';
    }
  };

  return (
    <div className="health-status-cards">
      {healthCards.map((card) => {
        const Icon = LucideIcons[card.icon];
        return (
          <div key={card.id} className={`health-card ${getStatusClass(card.status)}`}>
            <div className="card-icon">
              <Icon size={24} />
            </div>
            <div className="card-content">
              <h4>{card.title}</h4>
              <p className="card-date">{card.date}</p>
            </div>
            <div className={`status-indicator ${card.status}`}></div>
          </div>
        );
      })}
    </div>
  );
};

export default HealthStatusCards;
