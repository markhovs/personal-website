import dayjs from 'dayjs';

import type { Position } from '@/data/resume/work';

import JobSummary from './JobSummary';

interface JobProps {
  data: Position;
}

const fmt = (date: string) => dayjs(date).format('MMMM YYYY');

export default function Job({ data }: JobProps) {
  const { name, url, roles, summary, highlights } = data;

  return (
    <article className="jobs-container">
      <header>
        <h4 className="company">{url ? <a href={url}>{name}</a> : name}</h4>
        <ul className="role-timeline">
          {roles.map((role) => (
            <li className="role" key={role.position}>
              <span className="role-position">{role.position}</span>
              <span className="daterange">
                <time dateTime={role.startDate}>{fmt(role.startDate)}</time>
                {' - '}
                {role.endDate ? (
                  <time dateTime={role.endDate}>{fmt(role.endDate)}</time>
                ) : (
                  'Present'
                )}
              </span>
            </li>
          ))}
        </ul>
      </header>
      {summary ? <JobSummary summary={summary} /> : null}
      {highlights ? (
        <ul className="points">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
