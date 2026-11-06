import React, { useState } from 'react';
import { educationExperience } from '../data/portfolioData';
import { GraduationCap, Briefcase, Calendar, MapPin, Award } from 'lucide-react';

export default function Education() {
  const [activeTab, setActiveTab] = useState('all');

  const { education, experience } = educationExperience;

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Qualifications &amp; Career</span>
          <h2 className="section-title">EDUCATION &amp; EXPERIENCE</h2>
        </div>

        {/* Tab Filters */}
        <div className="timeline-tabs-wrap">
          <div className="timeline-tabs">
            <button
              type="button"
              className={`timeline-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Milestones
            </button>
            <button
              type="button"
              className={`timeline-tab-btn ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              <GraduationCap size={16} />
              Education
            </button>
            <button
              type="button"
              className={`timeline-tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              <Briefcase size={16} />
              Experience
            </button>
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="timeline-grid">
          {/* Education Column */}
          {(activeTab === 'all' || activeTab === 'education') && (
            <div className="timeline-column">
              <div className="timeline-column-header">
                <div className="column-icon-wrap">
                  <GraduationCap size={20} />
                </div>
                <h3>Educational Background</h3>
              </div>

              <div className="timeline-list">
                {education.map((item, idx) => (
                  <div key={idx} className="timeline-item portfolio-card">
                    <div className="timeline-dot" />
                    
                    <div className="timeline-item-header">
                      <span className="timeline-year">
                        <Calendar size={13} />
                        {item.year}
                      </span>
                      {item.score && (
                        <span className="timeline-badge">
                          <Award size={12} />
                          {item.score}
                        </span>
                      )}
                    </div>

                    <h4 className="timeline-title">{item.degree}</h4>
                    <span className="timeline-institution">{item.institution}</span>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experience Column */}
          {(activeTab === 'all' || activeTab === 'experience') && (
            <div className="timeline-column">
              <div className="timeline-column-header">
                <div className="column-icon-wrap" style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#818cf8' }}>
                  <Briefcase size={20} />
                </div>
                <h3>Work &amp; Professional Experience</h3>
              </div>

              <div className="timeline-list">
                {experience.map((item, idx) => (
                  <div key={idx} className="timeline-item portfolio-card">
                    <div className="timeline-dot" style={{ borderColor: '#818cf8' }} />
                    
                    <div className="timeline-item-header">
                      <span className="timeline-year">
                        <Calendar size={13} />
                        {item.year}
                      </span>
                      {item.location && (
                        <span className="timeline-badge" style={{ color: '#818cf8', borderColor: 'rgba(129, 140, 248, 0.3)' }}>
                          <MapPin size={12} />
                          {item.location}
                        </span>
                      )}
                    </div>

                    <h4 className="timeline-title">{item.role}</h4>
                    <span className="timeline-institution">{item.institution}</span>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

