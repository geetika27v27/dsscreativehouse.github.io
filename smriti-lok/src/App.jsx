import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleJoinWaitlist = async () => {
    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      alert('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyPdMDy2CxmTeufpa8Yr6SX7-VxA5n3_SoZFwa5HJuJQablh10GmrQWsWIm55Pobqhy/exec';

    try {
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ email }),
      });

      alert('Successfully joined the waitlist!');
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
      alert('There was a connection error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      <section className="page-one">
        <video className="video-bg" autoPlay loop muted playsInline>
          <source src="/landing-video.mp4" type="video/mp4" />
        </video>

        <div className="center-content">
          <h1 className="main-title">Smriti Lok</h1>
          <div className="tagline-wrapper">
            <p className="tagline">AI to preserve, relive, and share&nbsp;&nbsp;&nbsp;your memories</p>
          </div>
        </div>

        <div className="bottom-content">
          <div className="email-form">
            <input
              type="email"
              className="email-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="join-hype-btn"
              onClick={handleJoinWaitlist}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Joining...' : 'Join Waitlist'}
            </button>
          </div>
        </div>

        <footer className="footer">
          <div className="footer-left">
            <p>Copyright © 2025 Smriti Lok - All Rights Reserved.</p>
          </div>
          <div className="footer-right">
            <a
              href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=geetika@smritilok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              contact@smritilok.com
            </a>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default App;