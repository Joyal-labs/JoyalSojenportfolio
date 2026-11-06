import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Download, ExternalLink, FileText, CheckCircle2, X, Eye } from 'lucide-react';

export default function Resume() {
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Curriculum Vitae</span>
          <h2 className="section-title">RESUME</h2>
        </div>

        <div className="resume-container portfolio-card">
          <div className="resume-glow" />

          <div className="resume-icon-badge">
            <FileText size={36} className="resume-badge-icon" />
          </div>

          <h3 className="resume-headline">
            Download or Preview Joyal Sojen's Official Resume
          </h3>

          <p className="resume-summary">
            MCA Graduate &amp; Full Stack Developer with hands-on enterprise internship experience at IN-TA Solution Pvt Limited and academic credentials from Don Bosco College and Christ College. Seeking an entry-level Full Stack Developer role in Bengaluru.
          </p>

          <div className="resume-highlights">
            <div className="resume-highlight-item">
              <CheckCircle2 size={16} className="highlight-check" />
              <span>Full Stack Development (Python, Django, Next.js, React, MySQL)</span>
            </div>
            <div className="resume-highlight-item">
              <CheckCircle2 size={16} className="highlight-check" />
              <span>Solar System Management (RBAC &amp; KSEB Operations)</span>
            </div>
            <div className="resume-highlight-item">
              <CheckCircle2 size={16} className="highlight-check" />
              <span>Recruit AI Platform (Groq API &amp; Vector Pipelines)</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="resume-actions">
            <a
              href={personalInfo.resumeUrl}
              download="Joyal_Sojen_Resume.pdf"
              className="btn btn-primary"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>

            <button
              type="button"
              onClick={() => setPreviewOpen(true)}
              className="btn btn-secondary"
            >
              <Eye size={18} />
              <span>Open Resume</span>
            </button>
          </div>

          <div className="resume-meta-note">
            <span>Verified credentials for <code>joyalsojen02@gmail.com</code> | +91 8086693702</span>
          </div>
        </div>
      </div>

      {/* In-Page Interactive PDF / Resume Preview Modal */}
      {previewOpen && (
        <div className="modal-overlay" onClick={() => setPreviewOpen(false)}>
          <div className="modal-container resume-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <FileText size={22} className="modal-icon" />
                <div>
                  <h3 className="modal-title">{personalInfo.name} - Resume Preview</h3>
                  <span className="section-subtitle" style={{ marginBottom: 0 }}>Full Stack Developer | Bengaluru</span>
                </div>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setPreviewOpen(false)}
                aria-label="Close resume preview"
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-body resume-modal-body">
              {/* Embedded PDF iframe */}
              <iframe
                src={`${personalInfo.resumeUrl}#toolbar=0`}
                title="Resume Preview"
                className="resume-iframe"
              />
            </div>

            <div className="modal-footer">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <ExternalLink size={16} />
                <span>Open in New Tab</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Joyal_Sojen_Resume.pdf"
                className="btn btn-primary"
              >
                <Download size={16} />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
