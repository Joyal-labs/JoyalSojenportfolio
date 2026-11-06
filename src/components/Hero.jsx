import React, { useState, useEffect, useRef } from 'react';
import { Download, Mail, Github, Linkedin, Instagram, ChevronLeft, ChevronRight, MapPin, Sparkles, ArrowDown } from 'lucide-react';
import { personalInfo, heroPhotos } from '../data/portfolioData';

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // Dynamic typing / rotating roles: "Full Stack Developer" <-> "UI/UX Designer"
  const roles = ["Full Stack Developer", "Python & Django Developer", "Frontend Developer", "Backend Developer", "UI/UX Designer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 45 : 90;

    if (!isDeleting && displayedRole === currentFullRole) {
      // Pause when full role is typed
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedRole === "") {
      // Switch to next role
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedRole((prev) =>
        isDeleting
          ? currentFullRole.substring(0, prev.length - 1)
          : currentFullRole.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, roleIndex]);

  const totalPhotos = heroPhotos.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % totalPhotos);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + totalPhotos) % totalPhotos);
  };

  const goToSlide = (idx) => {
    setActiveIndex(idx);
  };

  // Automatic 3D rotation with pause-on-hover
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 4500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, activeIndex]);

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Animated Particles */}
      <div className="hero-particles-field">
        <span className="particle particle-1" />
        <span className="particle particle-2" />
        <span className="particle particle-3" />
        <span className="particle particle-4" />
        <span className="particle particle-5" />
        <span className="particle particle-6" />
        <span className="particle particle-7" />
        <span className="particle particle-8" />
      </div>

      <div className="container hero-container">
        {/* Left Column: Hero Intro Typography & CTAs */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-pulse" />
            <Sparkles size={14} className="hero-badge-icon" />
            <span>Available for freelance</span>
          </div>

          <h4 className="hero-greeting">{personalInfo.greeting}</h4>

          <h1 className="hero-name">
            <span className="name-gradient">JOYAL SOJEN</span>
          </h1>

          <h2 className="hero-title">
            <span className="highlight-text">{displayedRole || "\u00A0"}</span>
            <span className="typing-cursor">|</span>
          </h2>

          <p className="hero-bio">
            MCA Graduate &amp; Full Stack Developer with hands-on experience in <strong>Python, Django, Next.js, React, and MySQL</strong>. Currently interning in software development &amp; business operations intern at <strong>IN-TA Solution Pvt Limited</strong>, delivering scalable web systems with multi-role access control and high precision.
          </p>

          {/* Social Media Links */}
          <div className="hero-socials">
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="social-icon-btn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="social-icon-btn"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="social-icon-btn"
            >
              <Instagram size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email Me"
              className="social-icon-btn"
            >
              <Mail size={20} />
            </a>
            <div className="hero-location-chip">
              <MapPin size={14} className="chip-icon" />
              <span>Bengaluru, India</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hero-actions">
            <a
              href={personalInfo.resumeUrl}
              download="Joyal_Sojen_Resume.pdf"
              className="btn btn-primary hero-btn-main"
            >
              <Download size={18} />
              <span>Download CV</span>
            </a>
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="btn btn-secondary"
            >
              <Mail size={18} />
              <span>Contact Me</span>
            </a>
          </div>
        </div>

        {/* Right Column: World-Class 3D Rotating Photo Carousel */}
        <div
          className="hero-3d-presentation"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Ambient Lighting & Rings */}
          <div className="hero-glow-backdrop" />
          <div className="orbital-ring ring-outer" />
          <div className="orbital-ring ring-middle" />
          <div className="orbital-ring ring-inner" />

          {/* 3D Carousel Stage */}
          <div className="carousel-3d-stage">
            {heroPhotos.map((photo, index) => {
              // Calculate relative position index (0 = active, 1 = right, 3 = left, 2 = back)
              const diff = (index - activeIndex + totalPhotos) % totalPhotos;

              let cardClass = 'carousel-card';
              if (diff === 0) cardClass += ' card-active';
              else if (diff === 1) cardClass += ' card-next';
              else if (diff === totalPhotos - 1) cardClass += ' card-prev';
              else cardClass += ' card-back';

              return (
                <div
                  key={photo.id}
                  className={cardClass}
                  onClick={() => goToSlide(index)}
                  title={`Photo ${index + 1}`}
                >
                  <div className="carousel-card-inner">
                    <img
                      src={photo.url}
                      alt={`Joyal Sojen portrait ${index + 1}`}
                      className="carousel-image"
                    />
                  </div>
                  {diff === 0 && <div className="card-ambient-shadow" />}
                </div>
              );
            })}
          </div>

          {/* 3D Carousel Controls: Manual Arrows & Dots */}
          <div className="carousel-controls-bar">
            <button
              type="button"
              className="carousel-arrow-btn"
              onClick={prevSlide}
              aria-label="Previous photo"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="carousel-dots-group">
              {heroPhotos.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  className={`carousel-dot ${dotIdx === activeIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              className="carousel-arrow-btn"
              onClick={nextSlide}
              aria-label="Next photo"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <a href="#about" className="hero-scroll-indicator" aria-label="Scroll to about section">
        <span>Explore Portfolio</span>
        <ArrowDown size={14} className="bounce-arrow" />
      </a>
    </section>
  );
}
