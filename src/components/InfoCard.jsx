import React from 'react';

const InfoCard = ({ icon: Icon, label, value }) => {
  return (
    <div className="info-card">
      <div className="info-card-icon">
        <Icon size={24} />
      </div>
      <div className="d-flex flex-column justify-content-center">
        <span 
          style={{ 
            fontSize: '0.85rem', 
            color: 'var(--text-secondary)', 
            fontWeight: 500, 
            lineHeight: '1.2' 
          }}
        >
          {label}
        </span>
        <span 
          style={{ 
            fontSize: '1rem', 
            color: 'var(--text-primary)', 
            fontWeight: 600, 
            marginTop: '4px',
            lineHeight: '1.3'
          }}
        >
          {value}
        </span>
      </div>
    </div>
  );
};

export default InfoCard;
