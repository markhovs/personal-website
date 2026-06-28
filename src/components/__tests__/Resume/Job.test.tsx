import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Job from '../../Resume/Experience/Job';

describe('Job', () => {
  const mockJob = {
    name: 'Acme Corp',
    url: 'https://acme.com',
    roles: [
      {
        position: 'Senior Engineer',
        startDate: '2020-01-15',
        endDate: '2023-06-30',
      },
    ],
    summary: 'Led development of **critical systems**.',
    highlights: ['Shipped feature X', 'Improved performance by 50%'],
  };

  it('renders company name with link', () => {
    render(<Job data={mockJob} />);

    const link = screen.getByRole('link', { name: /acme corp/i });
    expect(link).toHaveAttribute('href', 'https://acme.com');
  });

  it('renders role position', () => {
    render(<Job data={mockJob} />);

    expect(screen.getByText('Senior Engineer')).toBeInTheDocument();
  });

  it('renders multiple roles as a timeline', () => {
    const multiRole = {
      ...mockJob,
      roles: [
        {
          position: 'Engineer',
          startDate: '2020-01-15',
          endDate: '2021-06-30',
        },
        { position: 'Senior Engineer', startDate: '2021-07-01' },
      ],
    };

    render(<Job data={multiRole} />);

    expect(screen.getByText('Engineer')).toBeInTheDocument();
    expect(screen.getByText('Senior Engineer')).toBeInTheDocument();
    expect(document.querySelectorAll('.role-timeline .role').length).toBe(2);
  });

  it('formats date range correctly', () => {
    render(<Job data={mockJob} />);

    expect(screen.getByText(/january 2020/i)).toBeInTheDocument();
    expect(screen.getByText(/june 2023/i)).toBeInTheDocument();
  });

  it('shows Present for a current role (no end date)', () => {
    const currentJob = {
      ...mockJob,
      roles: [{ position: 'Senior Engineer', startDate: '2020-01-15' }],
    };

    render(<Job data={currentJob} />);

    expect(screen.getByText(/present/i)).toBeInTheDocument();
  });

  it('renders summary with markdown', () => {
    render(<Job data={mockJob} />);

    expect(screen.getByText(/led development of/i)).toBeInTheDocument();
  });

  it('renders highlights as list items', () => {
    render(<Job data={mockJob} />);

    expect(screen.getByText('Shipped feature X')).toBeInTheDocument();
    expect(screen.getByText('Improved performance by 50%')).toBeInTheDocument();

    const listItems = document.querySelectorAll('.points li');
    expect(listItems.length).toBe(2);
  });

  it('handles missing summary gracefully', () => {
    const jobWithoutSummary = { ...mockJob, summary: undefined };

    render(<Job data={jobWithoutSummary} />);

    expect(screen.getByText('Shipped feature X')).toBeInTheDocument();
  });

  it('handles missing highlights gracefully', () => {
    const jobWithoutHighlights = { ...mockJob, highlights: undefined };

    render(<Job data={jobWithoutHighlights} />);

    expect(screen.getByText(/led development/i)).toBeInTheDocument();

    const list = document.querySelector('.points');
    expect(list).not.toBeInTheDocument();
  });

  it('renders as article element', () => {
    render(<Job data={mockJob} />);

    const article = document.querySelector('article.jobs-container');
    expect(article).toBeInTheDocument();
  });
});
