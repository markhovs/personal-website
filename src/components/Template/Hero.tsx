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
          Software Engineer and Data Scientist building data-driven products at{' '}
          <a href="https://dabblelab.com" className="hero-highlight">
            Dabble Lab
          </a>
          .
          <br />
          AUA alumnus, TUM graduate, and a lifelong hobbyist.
        </p>

        <div className="hero-chips">
          <span className="hero-chip">AUA Alum</span>
          <span className="hero-chip">TUM Management</span>
          <span className="hero-chip">Data Science & Engineering</span>
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
