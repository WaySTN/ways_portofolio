import { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import ShinyText from "./ShinyText/ShinyText";
import "./AboutContent.css";

const introduction = "I’m Wahyu Setiawan, a seventh-semester Information Systems student at UPN Veteran Jawa Timur and an aspiring Software Engineer. I build web and mobile applications, work with APIs and databases, and enjoy solving real problems through technology. My experience includes developing a learning platform at FlyHigh and creating digital solutions for village partners through MBKM PMM.";
const words = introduction.split(" ");
const statistics = [
  { value: 5, suffix: "+", label: "Project Finished" },
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 100, suffix: "%", label: "Passion" },
];

function useSectionVisible(ref, threshold = 0.18) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && entry.intersectionRatio >= threshold) setVisible(true);
      else if (!entry.isIntersecting) setVisible(false);
    }, { threshold: [0, threshold], rootMargin: "-64px 0px -5% 0px" });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);
  return visible;
}

function Statistic({ value, suffix, label, index, active, reducedMotion }) {
  const counterRef = useRef(null);
  useEffect(() => {
    const counter = counterRef.current;
    if (reducedMotion) {
      counter.textContent = String(value);
      return;
    }
    counter.textContent = "0";
    if (!active) return;
    let frame;
    const start = performance.now() + 220 + index * 80;
    const tick = (now) => {
      const progress = Math.min(1, Math.max(0, (now - start) / 480));
      counter.textContent = String(Math.round(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, index, reducedMotion, value]);

  return (
    <div className="about-statistic" data-active={active} style={{ "--stat-delay": `${220 + index * 80}ms` }}>
      <dt className="about-statistic-label">{label}</dt>
      <dd className="about-statistic-value">
        <span className="sr-only">{value}{suffix}</span>
        <span className="about-counter" aria-hidden="true"><span className="about-counter-size">{value}</span><span ref={counterRef} className="about-counter-digits">{value}</span></span>
        <span className="text-violet-500" aria-hidden="true">{suffix}</span>
      </dd>
    </div>
  );
}

export default function AboutContent() {
  const reducedMotion = useReducedMotion();
  const introRef = useRef(null);
  const paragraphRef = useRef(null);
  const statsRef = useRef(null);
  const introVisible = useSectionVisible(introRef);
  const statsVisible = useSectionVisible(statsRef, 0.75);
  const [pageReady, setPageReady] = useState(false);
  const [pageVisible, setPageVisible] = useState(() => !document.hidden);

  useEffect(() => {
    const ready = () => setPageReady(document.documentElement.dataset.portfolioReady === "true" || !document.querySelector("[data-portfolio-preloader]"));
    const visibility = () => setPageVisible(!document.hidden);
    ready();
    window.addEventListener("portfolio:ready", ready);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      window.removeEventListener("portfolio:ready", ready);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);

  useLayoutEffect(() => {
    const paragraph = paragraphRef.current;
    const measureLines = () => {
      const masks = [...paragraph.querySelectorAll(".about-word-mask")];
      const rows = [...new Set(masks.map((word) => word.offsetTop))].sort((a, b) => a - b);
      const step = Math.min(65, 400 / Math.max(1, rows.length - 1));
      masks.forEach((word) => word.style.setProperty("--word-delay", `${90 + rows.indexOf(word.offsetTop) * step}ms`));
    };
    measureLines();
    const observer = new ResizeObserver(measureLines);
    observer.observe(paragraph);
    return () => observer.disconnect();
  }, []);

  const canAnimate = pageReady && pageVisible;
  return (
    <div className="about-copy" data-entered={canAnimate && introVisible} data-reduced-motion={Boolean(reducedMotion)}>
      <div ref={introRef} className="about-intro-group">
        <h2 className="about-title text-3xl md:text-4xl font-bold text-white mb-5"><span className="about-title-mask"><span className="about-title-text">About Me</span></span></h2>
        <p ref={paragraphRef} className="about-introduction text-base md:text-lg leading-relaxed text-gray-300">
          <span className="sr-only">{introduction}</span>
          <span aria-hidden="true">{words.map((word, index) => <Fragment key={`${index}-${word}`}><span className="about-word-mask"><span className="about-word-text">{word}</span></span>{index < words.length - 1 ? " " : ""}</Fragment>)}</span>
        </p>
      </div>
      <dl ref={statsRef} className="about-statistics">
        {statistics.map((statistic, index) => <Statistic key={statistic.label} {...statistic} index={index} active={canAnimate && statsVisible} reducedMotion={reducedMotion} />)}
      </dl>
      <div className="about-motto" data-active={canAnimate && statsVisible}>
        <ShinyText text="Working with heart, creating with mind." disabled={reducedMotion} speed={3} className="text-sm md:text-base text-violet-400" />
      </div>
    </div>
  );
}
