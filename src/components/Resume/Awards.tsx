import type { Award } from '@/data/resume/awards';

interface AwardsProps {
  data: Award[];
}

export default function Awards({ data }: AwardsProps) {
  return (
    <div className="awards">
      <div className="link-to" id="awards" />
      <div className="title">
        <h3>Awards</h3>
      </div>
      {data.map((award) => (
        <article
          className="degree-container"
          key={`${award.title}-${award.event}`}
        >
          <header>
            <h4 className="degree">
              {award.url ? <a href={award.url}>{award.title}</a> : award.title}
            </h4>
            <p className="school">
              {award.event}, <time dateTime={award.year}>{award.year}</time>
            </p>
          </header>
          {award.description ? (
            <p className="summary">{award.description}</p>
          ) : null}
        </article>
      ))}
    </div>
  );
}
