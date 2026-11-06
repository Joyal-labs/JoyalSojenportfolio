import React, { useState } from 'react';
import { Award, Briefcase, GraduationCap, X, CheckCircle2, Heart, Target, Sparkles, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get to know me</span>
          <h2 className="section-title">ABOUT</h2>
        </div>

        <div className="about-grid">
          {/* Left Column: Circular Profile Image matching Figma thumbnail */}
          <div className="about-image-column">
            <div className="about-circle-container">
              <div className="about-circle-glow" />
              <img
                src={personalInfo.profileImage}
                alt={`${personalInfo.name} Portrait`}
                className="about-avatar"
              />
            </div>
            <div className="about-status-tag">
              <span className="about-status-dot" />
              <span>Full Stack Development &amp; AI</span>
            </div>
            <div className="about-location-tag">
              <MapPin size={14} />
              <span>Bengaluru, Karnataka</span>
            </div>
          </div>

          {/* Right Column: Bio, Details & Action */}
          <div className="about-content-column">
            <h3 className="about-heading">
              Building Scalable <span className="highlight-text">Full-Stack Solutions</span> with Industry Rigor
            </h3>

            <div className="about-paragraphs">
              {personalInfo.aboutText.map((paragraph, idx) => (
                <p key={idx} className="about-text-line">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick Metrics Cards */}
            <div className="about-stats-grid">
              <div className="about-stat-card">
                <div className="stat-icon-wrap">
                  <Briefcase size={22} className="stat-icon" />
                </div>
                <div className="stat-info">
                  <span className="stat-number">IN-TA Solution</span>
                  <span className="stat-label">Current Internship</span>
                </div>
              </div>

              <div className="about-stat-card">
                <div className="stat-icon-wrap">
                  <Award size={22} className="stat-icon" />
                </div>
                <div className="stat-info">
                  <span className="stat-number">{personalInfo.projectsCompleted}</span>
                  <span className="stat-label">Enterprise &amp; AI Projects</span>
                </div>
              </div>

              <div className="about-stat-card">
                <div className="stat-icon-wrap">
                  <GraduationCap size={22} className="stat-icon" />
                </div>
                <div className="stat-info">
                  <span className="stat-number">MCA + BCA</span>
                  <span className="stat-label">Computer Applications</span>
                </div>
              </div>
            </div>

            {/* Action button: Read More */}
            <div className="about-actions">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="btn btn-secondary about-readmore-btn"
              >
                <Sparkles size={16} />
                <span>Read More</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive "Read More" Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="section-subtitle">Biography &amp; Objectives</span>
                <h3 className="modal-title">About {personalInfo.name}</h3>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setModalOpen(false)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <div className="modal-section-title">
                  <Target size={18} className="modal-icon" />
                  <h4>Career Objective</h4>
                </div>
                <p>
                  MCA graduate (August 2026) seeking an entry-level full stack developer role in Bengaluru.
                  Passionate about engineering reliable, scalable, and responsive web applications, streamlining database records,
                  and working across modern Python, Django, Next.js, and React frameworks.
                </p>
              </div>

              <div className="modal-section">
                <div className="modal-section-title">
                  <Heart size={18} className="modal-icon" />
                  <h4>Core Strengths &amp; Areas of Focus</h4>
                </div>
                <ul className="modal-list">
                  <li>
                    <CheckCircle2 size={16} className="list-check-icon" />
                    <span><strong>Enterprise Workflows &amp; RBAC:</strong> Extensive hands-on experience designing 5-tier role-based access control (Admin, Manager, Worker, StoreKeeper, Customer) for solar power operations.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="list-check-icon" />
                    <span><strong>AI &amp; API Integration:</strong> Experience implementing Groq API inference, vector pipelines, and automated feedback mechanisms in Recruit AI.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="list-check-icon" />
                    <span><strong>Full-Stack Fluency:</strong> Seamlessly integrating Python, Django, Flask, Next.js, React.js, and MySQL with high data record precision.</span>
                  </li>
                </ul>
              </div>

              <div className="modal-section">
                <div className="modal-section-title">
                  <GraduationCap size={18} className="modal-icon" />
                  <h4>Education History</h4>
                </div>
                <p>
                  <strong>MCA:</strong> Don Bosco College, Kannur (Jan 2024 – Aug 2026)<br />
                  <strong>BCA:</strong> Christ College, Mysore (Oct 2020 – Sep 2023)
                </p>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
