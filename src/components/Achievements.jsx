import { FiAward } from "react-icons/fi";
import { achievements } from "../portfolioData";
import "./PortfolioSections.css";

export default function Achievements() {
  const [winner, ...recognitions] = achievements;
  return (
    <section className="honors-section" id="achievements" aria-labelledby="achievements-heading">
      <div className="honors-heading" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
        <div>
          <p className="portfolio-eyebrow">Ideas put to the test</p>
          <h2 id="achievements-heading" className="portfolio-section-title">Achievements</h2>
        </div>
        <p className="portfolio-section-description">Three milestones in building, designing, and solving problems with a team.</p>
      </div>
      <div className="honors-layout">
        <article className="honor-feature" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
          <div className="honor-feature-top">
            <span className="honor-label"><FiAward aria-hidden="true" /> {winner.result}</span>
            <span className="honor-year">{winner.year}</span>
          </div>
          <span className="honor-number" aria-hidden="true">1<span>st</span></span>
          <div className="honor-feature-bottom">
            <h3>{winner.event}</h3>
            <p>{winner.project}</p>
          </div>
        </article>
        <div className="honor-recognitions">
          {recognitions.map((achievement, index) => (
            <article key={achievement.id} className="honor-row" data-aos="fade-up" data-aos-duration="800" data-aos-delay={index * 100} data-aos-once="true">
              <div className="honor-row-meta">
                <span>{achievement.year}</span>
                <span className="honor-result">{achievement.result}</span>
              </div>
              <h3>{achievement.event}</h3>
              <p className="honor-project">{achievement.project}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
