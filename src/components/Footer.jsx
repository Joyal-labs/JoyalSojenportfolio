import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        <div className="footer-top">
          {/* Logo as JS */}
          <div className="footer-brand">

            <p className="footer-brand-desc">
              MCA Graduate &amp; Full Stack Developer in Bengaluru specializing in Python, Django, Next.js, React, and MySQL.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-links-group">
            <h5 className="footer-heading">Navigation</h5>
            <div className="footer-links-grid">
              <a href="#home" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About</a>
              <a href="#skills" className="footer-link">Skills</a>
              <a href="#services" className="footer-link">Services</a>
              <a href="#projects" className="footer-link">Projects</a>
              <a href="#education" className="footer-link">Education</a>
              <a href="#resume" className="footer-link">Resume</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="footer-social-group">
            <h5 className="footer-heading">Connect With Me</h5>
            <div className="footer-socials">
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon-btn">
                <Linkedin size={18} />
              </a>
              <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon-btn">
                <Github size={18} />
              </a>
              <a href={personalInfo.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon-btn">
                <Instagram size={18} />
              </a>
              <a href={`mailto:${personalInfo.email}`} aria-label="Email" className="social-icon-btn">
                <Mail size={18} />
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="btn btn-sm btn-secondary back-to-top-btn"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="footer-crafted">
            Bengaluru, Karnataka &bull; +91 8086693702 &bull; joyalsojen02@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
}
