import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import { trainingCategories } from "../portfolioData";
import "./PortfolioSections.css";

function TrainingDialog({ category, onClose }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (dialog && !dialog.open) dialog.showModal();
    return () => { document.body.style.overflow = previousOverflow; };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) dialogRef.current.close();
      }}
      aria-labelledby="training-dialog-title"
      aria-describedby="training-dialog-description"
      className="training-dialog fixed inset-0 m-auto w-[calc(100%-2rem)] max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border bg-zinc-900 p-0 text-white backdrop:bg-black/75"
    >
      <div className="training-dialog-heading">
        <div>
          <p className="text-xs font-medium text-zinc-400">Training &amp; Certifications</p>
          <h3 id="training-dialog-title" className="mt-2 text-xl sm:text-2xl font-bold">{category.title}</h3>
          <p id="training-dialog-description" className="mt-2 text-sm text-zinc-400">{category.courses.length} courses and credentials</p>
        </div>
        <button type="button" onClick={() => dialogRef.current.close()} aria-label="Close training details" className="shrink-0 rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300">
          <FiX size={24} />
        </button>
      </div>
      <ul className="training-course-list">
        {category.courses.map((course) => (
          <li key={course.url} className="training-course-item">
            <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <div className="min-w-0">
                <p className="text-xs text-zinc-400">{course.provider}</p>
                <h4 className="mt-1 text-sm font-medium leading-relaxed text-white">{course.title}</h4>
              </div>
              <a href={course.url} target="_blank" rel="noopener noreferrer" aria-label={`View credential for ${course.title} (opens in a new tab)`} className="inline-flex shrink-0 items-center gap-1 rounded text-xs font-medium text-teal-200 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300">
                View Credential <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </dialog>
  );
}

export default function Training() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const courseCount = trainingCategories.reduce((total, category) => total + category.courses.length, 0);
  return (
    <section className="learning-section" id="training" aria-labelledby="training-heading">
      <div className="learning-intro" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
        <p className="portfolio-eyebrow">Always a student</p>
        <h2 id="training-heading" className="portfolio-section-title">Training &amp;<br /> Certifications</h2>
        <p className="portfolio-section-description">A growing collection of courses from Dicoding and DQLab. Pick a subject to explore the credentials.</p>
        <div className="learning-total"><strong>{courseCount}</strong><span>courses completed<br />across {trainingCategories.length} subjects</span></div>
      </div>
      <div className="course-directory">
        {trainingCategories.map((category, index) => (
          <div key={category.id} data-aos="fade-up" data-aos-duration="800" data-aos-delay={index * 80} data-aos-once="true">
            <button type="button" onClick={() => setSelectedCategory(category)} aria-haspopup="dialog" className="course-category">
              <span className="course-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <span><span className="course-title">{category.title}</span><span className="course-summary">{category.description}</span></span>
              <span className="course-count">{category.courses.length} courses</span>
              <span className="course-arrow" aria-hidden="true"><FiArrowUpRight /></span>
            </button>
          </div>
        ))}
      </div>
      {selectedCategory && <TrainingDialog category={selectedCategory} onClose={() => setSelectedCategory(null)} />}
    </section>
  );
}
