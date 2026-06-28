import { describe, expect, it } from 'vitest';

import work from '../resume/work';

describe('work data', () => {
  it('exports an array of companies', () => {
    expect(Array.isArray(work)).toBe(true);
    expect(work.length).toBeGreaterThan(0);
  });

  it('each company has a name and at least one role', () => {
    for (const job of work) {
      expect(typeof job.name).toBe('string');
      expect(job.name.trim().length).toBeGreaterThan(0);
      expect(Array.isArray(job.roles)).toBe(true);
      expect(job.roles.length).toBeGreaterThan(0);
    }
  });

  it('each role has a position and a valid start date', () => {
    for (const job of work) {
      for (const role of job.roles) {
        expect(typeof role.position).toBe('string');
        expect(role.position.trim().length).toBeGreaterThan(0);
        expect(new Date(role.startDate).toString()).not.toBe('Invalid Date');
      }
    }
  });

  it('role endDate is valid and after startDate when present', () => {
    for (const job of work) {
      for (const role of job.roles) {
        if (role.endDate) {
          const start = new Date(role.startDate);
          const end = new Date(role.endDate);
          expect(end.toString()).not.toBe('Invalid Date');
          expect(end.getTime()).toBeGreaterThan(start.getTime());
        }
      }
    }
  });

  it('urls are valid when present', () => {
    const urlRegex = /^https?:\/\/.+/;

    for (const job of work) {
      if (job.url) {
        expect(job.url).toMatch(urlRegex);
      }
    }
  });

  it('has at least one current role (no endDate)', () => {
    const currentRoles = work.flatMap((job) =>
      job.roles.filter((role) => !role.endDate),
    );
    expect(currentRoles.length).toBeGreaterThanOrEqual(1);
  });

  it('highlights are non-empty arrays when present', () => {
    for (const job of work) {
      if (job.highlights) {
        expect(Array.isArray(job.highlights)).toBe(true);
        expect(job.highlights.length).toBeGreaterThan(0);
      }
    }
  });

  it('spans multiple years across roles', () => {
    const years = work.flatMap((job) =>
      job.roles.map((role) => new Date(role.startDate).getFullYear()),
    );
    expect(new Set(years).size).toBeGreaterThan(1);
  });
});
