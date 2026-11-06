import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLightMode, setIsLightMode] = useState(() => {
    return localStorage.getItem('portfolio-theme') === 'light';
  });

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add('light-theme');
      localStorage.setItem('portfolio-theme', 'light');
    } else {
      document.documentElement.classList.remove('light-theme');
      localStorage.setItem('portfolio-theme', 'dark');
    }
  }, [isLightMode]);

  const toggleTheme = () => {
    setIsLightMode(prev => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Logo removed as requested; placeholder preserves exact menu positioning */}
        <div className="navbar-logo-placeholder" aria-hidden="true" style={{ width: '44px', height: '44px', visibility: 'hidden' }} />

        {/* Desktop Navigation Links */}
        <nav className="navbar-links">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                {link.name}
                {isActive && <span className="active-indicator" />}
              </a>
            );
          })}
        </nav>

        {/* Right CTA button & Theme Toggle */}
        <div className="navbar-action">
          {/* Subtle Theme Toggle Button */}
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={isLightMode ? "Switch to dark mode" : "Switch to light mode"}
            title={isLightMode ? "Switch to dark mode" : "Switch to light mode"}
          >
            {isLightMode ? <Moon size={17} /> : <Sun size={17} />}
          </button>

          <a
            href={personalInfo.resumeUrl}
            download="Joyal_Sojen_Resume.pdf"
            className="btn btn-sm btn-secondary nav-resume-btn"
          >
            <Download size={14} />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`mobile-nav-link ${isActive ? 'active' : ''}`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="mobile-menu-footer">
            <a
              href={personalInfo.resumeUrl}
              download="Joyal_Sojen_Resume.pdf"
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
