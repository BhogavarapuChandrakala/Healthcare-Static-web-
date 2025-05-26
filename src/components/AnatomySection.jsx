
import { healthIndicators } from '../data/healthStatus';

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <div className="anatomy-container">
        <img 
          src="/lovable-uploads/aa9edcf3-f837-4512-ab26-eb438ce6566f.png" 
          alt="Human anatomy diagram" 
          className="anatomy-image"
        />
        
        {healthIndicators.map((indicator) => (
          <div
            key={indicator.id}
            className={`health-indicator ${indicator.status}`}
            style={{
              top: indicator.position.top,
              left: indicator.position.left,
              '--indicator-color': indicator.color
            }}
          >
            <div className="indicator-dot"></div>
            <span className="indicator-label">{indicator.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnatomySection;
