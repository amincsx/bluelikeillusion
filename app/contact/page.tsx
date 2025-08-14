'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [ok, setOk] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const body: Record<string, unknown> = {};
    data.forEach((v, k) => (body[k] = v));

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectName: body.name || 'Contact Form',
          businessType: body.service,
          description: body.message,
          preferences: [],
          email: body.email,
          phone: ''
        })
      });
      setOk(res.ok);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="contact-page">
      <div className="video-background">
        <div className="overlay" />
      </div>
      <div className="contact-hero">
        <h1>Let's Create Together</h1>
        <p>Turn your digital vision into reality</p>
      </div>
      <div className="contact-container">
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="service">Service Interest</label>
            <select id="service" name="service" required>
              <option value="">Select a Service</option>
              <option value="website">Website Development</option>
              <option value="app">App Development</option>
              <option value="brand">Brand Strategy</option>
              <option value="design">Visual Design</option>
              <option value="3d">3D Animation</option>
              <option value="motion">Motion Graphics</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Project Details</label>
            <textarea id="message" name="message" rows={5} required />
          </div>
          <button type="submit" className="submit-btn" disabled={submitting}>
            {submitting ? 'Sending...' : 'Send Message'}
          </button>
          {ok && <div className="success-popup show"><div className="popup-content"><h3>Message Sent!</h3></div></div>}
        </form>
      </div>
    </main>
  );
}

