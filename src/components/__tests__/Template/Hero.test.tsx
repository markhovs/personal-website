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

  it('renders the tagline with a Dabble Lab link', () => {
    render(<Hero />);

    const dabbleLabLink = screen.getByRole('link', { name: /dabble lab/i });
    expect(dabbleLabLink).toHaveAttribute('href', 'https://dabblelab.com');
    expect(dabbleLabLink).toHaveClass('hero-highlight');
  });

  it('displays hero chips for credentials', () => {
    render(<Hero />);

    expect(screen.getByText('AUA Alum')).toBeInTheDocument();
    expect(screen.getByText('TUM Management')).toBeInTheDocument();
    expect(screen.getByText('Data Science & Engineering')).toBeInTheDocument();
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
