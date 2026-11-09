import { experiences } from "../portfolioData";
import "./PortfolioSections.css";

export default function Experience() {
  return (
    <section className="journey-section" id="experience" aria-labelledby="experience-heading">
      <div className="journey-intro" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
        <p className="portfolio-eyebrow">Learning through practice</p>
        <h2 id="experience-heading" className="portfolio-section-title">Experience</h2>
        <p className="portfolio-section-description">From a learning platform to applications for village partners. A few places where I have put my skills to work.</p>
        <span className="journey-caption">2025 — 2026</span>
      </div>
      <ol className="experience-timeline">
        {experiences.map((experience, index) => (
          <li key={experience.id} className="experience-stop" data-aos="fade-up" data-aos-duration="800" data-aos-delay={index * 100} data-aos-once="true">
            <span className="experience-dot" aria-hidden="true" />
            <article>
              <p className="experience-period">{experience.period}</p>
              <div className="experience-identity">
                <img
                  className="experience-logo"
                  src={`${import.meta.env.BASE_URL}${experience.logo}`}
                  alt=""
                  width={experience.logoWidth}
                  height={experience.logoHeight}
                  loading="lazy"
                  decoding="async"
                />
                <div className="experience-identity-text">
                  <h3 className="experience-organization">{experience.organization}</h3>
                  <p className="experience-role">{experience.role}</p>
                  {experience.location && <p className="experience-location">{experience.location}</p>}
                </div>
              </div>
              <p className="experience-description">{experience.description}</p>
              <ul className="experience-contributions">
                {experience.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
              </ul>
              <ul className="experience-technologies" aria-label="Technologies used">
                {experience.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
