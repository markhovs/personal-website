import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Hero from '../../Template/Hero';

describe('Hero', () => {
  it('renders the hero section', () => {
    render(<Hero />);

    const heroSection = document.querySelector('.hero');
    expect(heroSection).toBeInTheDocument();
  });

  it('displays the name as heading', () => {
    render(<Hero />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Mark Hovsepyan');
  });

  it('renders the tagline with a SAP Fioneer link', () => {
    render(<Hero />);

    const fioneerLink = screen.getByRole('link', { name: /sap fioneer/i });
    expect(fioneerLink).toHaveAttribute('href', 'https://www.sapfioneer.com');
    expect(fioneerLink).toHaveClass('hero-highlight');
  });

  it('displays hero chips for credentials', () => {
    render(<Hero />);

    expect(
      screen.getByText('SAP Fioneer', { selector: '.hero-chip' }),
    ).toBeInTheDocument();
    expect(screen.getByText('TUM Management')).toBeInTheDocument();
    expect(screen.getByText('AUA Computer Science')).toBeInTheDocument();
  });

  it('renders CTA buttons with correct links', () => {
    render(<Hero />);

    const aboutButton = screen.getByRole('link', { name: /about me/i });
    expect(aboutButton).toHaveAttribute('href', '/about');
    expect(aboutButton).toHaveClass('button');

    const resumeButton = screen.getByRole('link', { name: /view resume/i });
    expect(resumeButton).toHaveAttribute('href', '/resume');
    expect(resumeButton).toHaveClass('button-secondary');
  });

  it('has decorative background elements', () => {
    render(<Hero />);

    const bg = document.querySelector('.hero-bg');
    expect(bg).toBeInTheDocument();
    expect(bg).toHaveAttribute('aria-hidden', 'true');
  });
});
