import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Github, Linkedin, Instagram, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear field-specific error
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message cannot be empty';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Please provide a message with at least 10 characters';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }


    setIsSubmitting(true);
    setSubmitStatus(null);


    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }

  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">CONTACTS</h2>
        </div>

        <div className="contact-grid">
          {/* Left Column: Contact Details Cards */}
          <div className="contact-info-column">
            <h3 className="contact-column-title">
              Let's Discuss Your <span className="highlight-text">Next Project</span>
            </h3>

            <p className="contact-intro">
              Whether you have an upcoming project, are looking to build a new product, or simply want to connect, feel free to drop me a message. I respond promptly!
            </p>

            <div className="contact-cards-list">
              <a href={`mailto:${personalInfo.email}`} className="contact-card portfolio-card">
                <div className="contact-icon-box">
                  <Mail size={20} />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label">Email</span>
                  <span className="contact-card-value">{personalInfo.email}</span>
                </div>
              </a>

              <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="contact-card portfolio-card">
                <div className="contact-icon-box">
                  <Phone size={20} />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label">Phone</span>
                  <span className="contact-card-value">{personalInfo.phone}</span>
                </div>
              </a>

              <div className="contact-card portfolio-card">
                <div className="contact-icon-box">
                  <MapPin size={20} />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label">Location</span>
                  <span className="contact-card-value">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Social media connections */}
            <div className="contact-socials-wrap">
              <span className="contact-socials-label">Connect on Social Channels:</span>
              <div className="contact-social-icons">
                <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon-btn">
                  <Github size={18} />
                </a>
                <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon-btn">
                  <Linkedin size={18} />
                </a>
                <a href={personalInfo.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon-btn">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-column">
            <div className="contact-form-card portfolio-card">
              <div className="form-card-header">
                <MessageSquare size={20} className="form-header-icon" />
                <h4>Send Me a Message</h4>
              </div>

              {submitStatus === 'success' && (
                <div className="alert-box alert-success">
                  <CheckCircle size={18} />
                  <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="alert-box alert-error">
                  <AlertCircle size={18} />
                  <span>Something went wrong. Please try again or email directly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                {/* Full Name */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Jenkins"
                    className={`form-input ${formErrors.name ? 'error' : ''}`}
                    disabled={isSubmitting}
                  />
                  {formErrors.name && <span className="error-hint">{formErrors.name}</span>}
                </div>

                {/* Email Address */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. sarah@example.com"
                    className={`form-input ${formErrors.email ? 'error' : ''}`}
                    disabled={isSubmitting}
                  />
                  {formErrors.email && <span className="error-hint">{formErrors.email}</span>}
                </div>

                {/* Subject */}
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Project Collaboration or Web Development"
                    className={`form-input ${formErrors.subject ? 'error' : ''}`}
                    disabled={isSubmitting}
                  />
                  {formErrors.subject && <span className="error-hint">{formErrors.subject}</span>}
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your inquiry, project scope, or timeline..."
                    className={`form-input form-textarea ${formErrors.message ? 'error' : ''}`}
                    disabled={isSubmitting}
                  />
                  {formErrors.message && <span className="error-hint">{formErrors.message}</span>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary submit-btn"
                >
                  <Send size={16} />
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

