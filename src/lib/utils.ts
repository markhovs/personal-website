/**
 * Shared utility functions and constants
 */

// Site configuration
export const SITE_URL = 'https://markhovs.com';
export const AUTHOR_NAME = 'Mark Hovsepyan';
export const TWITTER_HANDLE = '@markhovs';
export const SITE_IMAGE_PATH = '/images/me.jpg';
export const SITE_IMAGE_DIMENSIONS = {
  width: 1200,
  height: 1200,
} as const;

// Canonical one-line bio, shared across page metadata, OpenGraph, and JSON-LD.
export const SITE_DESCRIPTION =
  'Builder and technology geek bridging engineering and business. Senior Business Solution Consultant at SAP Fioneer, Munich. Entrepreneur & lifelong learner.';

// Image dimension constants
export const AVATAR_SIZE = {
  hero: 120,
  footer: 80,
  sidebar: 200,
} as const;

export const PROJECT_IMAGE = {
  width: 600,
  height: 400,
} as const;

// Skill competency
export const MAX_COMPETENCY = 5;

/**
 * Formats a date string to a human-readable format.
 * Parses as UTC to avoid timezone shifts.
 */
export function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  // Parse as UTC to avoid timezone shifts
  const date = new Date(`${dateStr}T12:00:00`);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
