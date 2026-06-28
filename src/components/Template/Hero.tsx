import Link from 'next/link';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <ThemePortrait width={160} height={160} priority />
        </div>

        <h1 className="hero-title">
          <span className="hero-name">Mark Hovsepyan</span>
        </h1>

        <p className="hero-tagline">
          Builder and technology geek bridging engineering and business. Senior
          Business Solution Consultant at{' '}
          <a href="https://www.sapfioneer.com" className="hero-highlight">
            SAP Fioneer
          </a>{' '}
          in Munich.
          <br />
          Entrepreneur at heart, and a relentless lifelong learner.
        </p>

        <div className="hero-chips">
          <span className="hero-chip">SAP Fioneer</span>
          <span className="hero-chip">TUM Management</span>
          <span className="hero-chip">AUA Computer Science</span>
        </div>

        <div className="hero-cta">
          <Link href="/about" className="button">
            About Me
          </Link>
          <Link href="/resume" className="button button-secondary">
            View Resume
          </Link>
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true">
        <div className="hero-gradient" />
      </div>
    </section>
  );
}
