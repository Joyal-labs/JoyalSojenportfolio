import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { Github, Eye, X, CheckCircle, Code, Layers, Sparkles, ExternalLink } from 'lucide-react';

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  const handleOpenPreview = (project) => {
    setActiveModalProject(project);
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Engineered Workflows &amp; Code</span>
          <h2 className="section-title">PROJECTS</h2>
        </div>

        {/* Projects Cards Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card portfolio-card">
              {/* Project Image Preview Container */}
              <div className="project-thumbnail-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                />
                <div className="project-overlay">
                  <button
                    type="button"
                    onClick={() => handleOpenPreview(project)}
                    className="btn btn-sm btn-accent project-overlay-btn"
                  >
                    <Eye size={15} />
                    <span>Project Overview</span>
                  </button>
                </div>
                <div className="project-category-badge">{project.category}</div>
              </div>

              {/* Project Content */}
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                
                <p className="project-description">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Links / Action Buttons */}
                <div className="project-actions">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary project-btn project-live-btn"
                    >
                      <ExternalLink size={16} />
                      <span>Live Project</span>
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary project-btn github-action-btn"
                  >
                    <Github size={16} />
                    <span>GitHub Source Code</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Interactive Project Preview Modal */}
      {activeModalProject && (
        <div className="modal-overlay" onClick={() => setActiveModalProject(null)}>
          <div className="modal-container project-preview-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="section-subtitle">{activeModalProject.category}</span>
                <h3 className="modal-title">{activeModalProject.title}</h3>
              </div>
              <button 
                type="button" 
                className="modal-close-btn"
                onClick={() => setActiveModalProject(null)}
                aria-label="Close project modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              {/* Image Preview */}
              <div className="modal-project-img-wrap">
                <img 
                  src={activeModalProject.image} 
                  alt={activeModalProject.title} 
                  className="modal-project-img"
                />
              </div>

              <div className="modal-project-details">
                <h4>System Architecture &amp; Implementation</h4>
                <p>{activeModalProject.description}</p>

                <h4 style={{ marginTop: '1.25rem' }}>Technologies &amp; Protocols</h4>
                <div className="project-tags" style={{ marginTop: '0.5rem' }}>
                  {activeModalProject.tags.map((tag, idx) => (
                    <span key={idx} className="tech-tag">{tag}</span>
                  ))}
                </div>

                <div className="modal-interactive-notice">
                  <CheckCircle size={16} className="notice-icon" />
                  <span>Official repository hosted on GitHub. Click below to inspect source code and commit history.</span>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-secondary"
                onClick={() => setActiveModalProject(null)}
              >
                Close
              </button>

              {activeModalProject.liveUrl && (
                <a
                  href={activeModalProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent"
                >
                  <ExternalLink size={16} />
                  <span>Live Project</span>
                </a>
              )}

              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Github size={16} />
                <span>GitHub Source Code</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
