import type { VolunteeringItem } from '@/data/resume/volunteering';

interface VolunteeringProps {
  data: VolunteeringItem[];
}

export default function Volunteering({ data }: VolunteeringProps) {
  return (
    <div className="volunteering">
      <div className="link-to" id="volunteering" />
      <div className="title">
        <h3>Volunteering &amp; Leadership</h3>
      </div>
      {data.map((item) => (
        <article className="jobs-container" key={`${item.org}-${item.role}`}>
          <header>
            <h4>
              {item.url ? <a href={item.url}>{item.org}</a> : item.org} -{' '}
              {item.role}
            </h4>
            <p className="daterange">{item.daterange}</p>
          </header>
          {item.summary ? <p className="summary">{item.summary}</p> : null}
        </article>
      ))}
    </div>
  );
}
