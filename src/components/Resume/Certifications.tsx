import type { Certification } from '@/data/resume/certifications';

interface CertificationsProps {
  data: Certification[];
}

export default function Certifications({ data }: CertificationsProps) {
  return (
    <div className="certifications">
      <div className="link-to" id="certifications" />
      <div className="title">
        <h3>Certifications &amp; Trainings</h3>
      </div>
      {data.map((cert) => (
        <article
          className="degree-container"
          key={`${cert.title}-${cert.issuer}`}
        >
          <header>
            <h4 className="degree">
              {cert.link ? <a href={cert.link}>{cert.title}</a> : cert.title}
            </h4>
            <p className="school">
              {cert.issuer}, <time dateTime={cert.year}>{cert.year}</time>
            </p>
          </header>
        </article>
      ))}
    </div>
  );
}
