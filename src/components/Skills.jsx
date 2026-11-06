import React, { useState } from 'react';
import { circularSkills, technicalSkills, softwaresKnown } from '../data/portfolioData';
import { Code2, Cpu, Wrench, Layers } from 'lucide-react';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];

  const filteredSkills = selectedCategory === 'All' 
    ? technicalSkills 
    : technicalSkills.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Technical Competence</span>
          <h2 className="section-title">SKILLS</h2>
        </div>

        {/* 1. Circular Progress Bars matching the Figma reference gauges */}
        <div className="circular-skills-card portfolio-card">
          <div className="card-top-header">
            <Layers size={18} className="card-header-icon" />
            <h3 className="card-title">Core Proficiency Gauges</h3>
          </div>

          <div className="circular-gauges-grid">
            {circularSkills.map((skill, index) => {
              // SVG Circle Math
              const radius = 45;
              const circumference = 2 * Math.PI * radius;
              const strokeDashoffset = circumference - (skill.percentage / 100) * circumference;

              return (
                <div key={index} className="gauge-item">
                  <div className="gauge-svg-wrap">
                    <svg className="gauge-svg" viewBox="0 0 110 110">
                      {/* Background track */}
                      <circle
                        className="gauge-bg"
                        cx="55"
                        cy="55"
                        r={radius}
                        strokeWidth="8"
                      />
                      {/* Foreground Progress */}
                      <circle
                        className="gauge-progress"
                        cx="55"
                        cy="55"
                        r={radius}
                        strokeWidth="8"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                      />
                    </svg>
                    <div className="gauge-center-text">
                      <span className="gauge-percent">{skill.percentage}%</span>
                    </div>
                  </div>
                  <h4 className="gauge-name">{skill.name}</h4>
                  <span className="gauge-sub">{skill.subtitle}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Linear Skill Progress Bars with Category Filter */}
        <div className="technical-skills-wrapper">
          <div className="tech-skills-header">
            <div className="tech-skills-title-wrap">
              <Code2 size={20} className="card-header-icon" />
              <h3>Programming Languages &amp; Frameworks</h3>
            </div>

            {/* Filter buttons */}
            <div className="category-filter-pills">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="skill-bars-grid">
            {filteredSkills.map((skill, idx) => (
              <div key={idx} className="skill-bar-card portfolio-card">
                <div className="skill-bar-meta">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-track">
                  <div 
                    className="skill-fill" 
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="skill-tag-pill">{skill.category}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Softwares Known Section matching the Figma reference */}
        <div id="softwares" className="softwares-section-wrapper">
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <span className="section-subtitle">Tools &amp; Workflows</span>
            <h2 className="section-title">SOFTWARES KNOWN</h2>
          </div>

          <div className="softwares-grid">
            {softwaresKnown.map((tool, idx) => (
              <div key={idx} className="software-card portfolio-card">
                <div className="software-card-top">
                  <div 
                    className="software-badge-indicator" 
                    style={{ backgroundColor: tool.color }} 
                  />
                  <span className="software-proficiency">{tool.proficiency}</span>
                </div>
                <h4 className="software-name">{tool.name}</h4>
                <span className="software-category">{tool.category}</span>
                <p className="software-desc">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

