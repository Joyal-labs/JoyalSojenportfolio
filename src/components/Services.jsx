import React from 'react';
import { services } from '../data/portfolioData';
import { Globe, Code, Server, Palette, Smartphone, Check, ArrowRight } from 'lucide-react';

const iconMap = {
  Globe: Globe,
  Code: Code,
  Server: Server,
  Palette: Palette,
  Smartphone: Smartphone,
};

export default function Services() {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">What I Offer</span>
          <h2 className="section-title">SERVICES</h2>
        </div>

        <div className="services-grid">
          {services.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Code;
            return (
              <div key={service.id} className="service-card portfolio-card">
                <div className="service-card-glow" />
                
                <div className="service-icon-wrap">
                  <IconComponent size={28} className="service-icon" />
                </div>

                <div className="service-number">0{idx + 1}</div>

                <h3 className="service-title">{service.title}</h3>
                
                <p className="service-description">{service.description}</p>

                <ul className="service-features-list">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx}>
                      <Check size={14} className="feature-check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="service-card-action">
                  <a 
                    href="#contact" 
                    onClick={handleScrollToContact}
                    className="service-inquire-link"
                  >
                    <span>Inquire Service</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

