import { useState } from "react";
import { FiCode, FiSmartphone, FiDatabase, FiPenTool, FiCpu, FiPlus, FiCheck } from "react-icons/fi";
import "./Services.css";

const services = [
  { id: "web", title: "Web Development", label: "Built for the browser", description: "Responsive websites and full-stack applications, connecting thoughtful interfaces with APIs and reliable backend systems.", tools: ["React / Next.js", "Laravel", "REST APIs"], Icon: FiCode, color: "#b7a4ed" },
  { id: "mobile", title: "Mobile Development", label: "Made to move with you", description: "Android and cross-platform applications with practical features, responsive screens, and connected data for everyday use.", tools: ["Flutter", "Java", "Firebase"], Icon: FiSmartphone, color: "#8bd3bc" },
  { id: "data", title: "Database Management", label: "A solid foundation", description: "Structured data models, application queries, and database integration that keep information organized and accessible.", tools: ["MySQL", "MongoDB", "Firebase"], Icon: FiDatabase, color: "#8dbde4" },
  { id: "design", title: "UI/UX Design", label: "Clarity in every interaction", description: "User flows, wireframes, and interactive prototypes that turn product ideas into clear, approachable digital experiences.", tools: ["Figma", "Prototyping", "User flows"], Icon: FiPenTool, color: "#e6b297" },
  { id: "ai", title: "AI & Machine Learning", label: "Intelligence, applied", description: "AI-powered features and machine learning prototypes, from LLM integration to deep learning experiments for web and mobile applications.", tools: ["Python", "Generative AI", "Deep Learning"], Icon: FiCpu, color: "#d7cc85" },
];

function ServiceIllustration({ type }) {
  return (
    <svg className="service-illustration" viewBox="0 0 360 160" fill="none" aria-hidden="true">
      {type === "web" && <>
        <rect x="35" y="12" width="290" height="136" rx="9" className="service-drawing-surface" />
        <path d="M35 36H325" className="service-drawing-line" />
        <circle cx="49" cy="24" r="2" fill="currentColor" /><circle cx="58" cy="24" r="2" fill="currentColor" opacity=".5" /><circle cx="67" cy="24" r="2" fill="currentColor" opacity=".25" />
        <rect x="52" y="53" width="44" height="77" rx="3" fill="currentColor" opacity=".08" />
        <path d="M62 66H85M62 78H78M62 90H82" className="service-drawing-line" />
        <path d="M113 61H204M113 72H172M113 91H158M113 102H194M113 113H177" className="service-drawing-line" />
        <path d="M249 70L233 86L249 102M277 70L293 86L277 102M269 64L257 108" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="113" y="124" width="46" height="6" rx="3" fill="currentColor" opacity=".5" />
      </>}
      {type === "mobile" && <>
        <rect x="125" y="3" width="87" height="154" rx="15" className="service-drawing-surface" />
        <path d="M151 14H186M155 146H183" className="service-drawing-line" />
        <rect x="137" y="32" width="63" height="47" rx="6" fill="currentColor" opacity=".14" />
        <path d="M147 68L158 55L168 62L188 43" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M138 92H186M138 102H174M138 112H180" className="service-drawing-line" />
        <rect x="138" y="124" width="62" height="10" rx="5" fill="currentColor" opacity=".5" />
        <rect x="225" y="57" width="83" height="43" rx="8" className="service-drawing-surface" /><path d="M237 72H292M237 83H271" className="service-drawing-line" />
        <path d="M54 82H111M87 70L99 82L87 94" className="service-drawing-line" />
      </>}
      {type === "data" && <>
        <path d="M180 49V24H78V62M180 111V137H282V99M210 80H261M99 80H150" className="service-drawing-line" />
        <path d="M145 62V101C145 115 215 115 215 101V62" className="service-drawing-surface" />
        <ellipse cx="180" cy="62" rx="35" ry="12" className="service-drawing-surface" />
        <path d="M145 81C145 95 215 95 215 81" className="service-drawing-line" />
        <rect x="46" y="62" width="64" height="36" rx="6" className="service-drawing-surface" /><rect x="252" y="62" width="64" height="36" rx="6" className="service-drawing-surface" />
        <path d="M61 74H95M61 85H83M267 74H301M267 85H289" className="service-drawing-line" />
        <circle cx="180" cy="24" r="3" fill="currentColor" /><circle cx="282" cy="137" r="3" fill="currentColor" />
      </>}
      {type === "design" && <>
        <rect x="65" y="18" width="230" height="126" rx="4" className="service-drawing-surface" />
        <rect x="85" y="38" width="81" height="84" rx="3" fill="currentColor" opacity=".08" />
        <circle cx="125" cy="68" r="17" stroke="currentColor" /><path d="M99 102H151M108 111H143M187 46H270M187 58H245M187 79H260" className="service-drawing-line" />
        <rect x="187" y="95" width="22" height="22" rx="11" fill="currentColor" /><rect x="218" y="95" width="22" height="22" rx="11" fill="currentColor" opacity=".5" /><rect x="249" y="95" width="22" height="22" rx="11" fill="currentColor" opacity=".2" />
        <path d="M62 15H298V147H62Z" stroke="currentColor" strokeDasharray="3 5" opacity=".4" />
        {[ [62,15], [298,15], [62,147], [298,147] ].map(([x,y])=><rect key={`${x}-${y}`} x={x-3} y={y-3} width="6" height="6" fill="currentColor" />)}
        <path d="M273 116L280 138L285 129L295 126Z" fill="currentColor" />
      </>}
      {type === "ai" && <>
        <path d="M70 38L153 23M70 38L153 80M70 38L153 137M70 80L153 23M70 80H153M70 80L153 137M70 122L153 23M70 122L153 80M70 122L153 137M153 23L237 49M153 23L237 111M153 80L237 49M153 80L237 111M153 137L237 49M153 137L237 111M237 49L300 80M237 111L300 80" stroke="currentColor" opacity=".3" />
        {[ [70,38], [70,80], [70,122], [153,23], [153,80], [153,137], [237,49], [237,111] ].map(([cx,cy])=><circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="7" className="service-drawing-surface" />)}
        <circle cx="300" cy="80" r="12" fill="currentColor" opacity=".2" /><circle cx="300" cy="80" r="5" fill="currentColor" />
        <circle cx="300" cy="80" r="23" stroke="currentColor" strokeDasharray="2 6" opacity=".5" />
      </>}
    </svg>
  );
}

export default function Services() {
  const [activeId, setActiveId] = useState("web");
  return (
    <section className="services-studio" id="services" aria-labelledby="services-heading">
      <header className="services-heading" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
        <div><p className="services-eyebrow">What I can build</p><h2 id="services-heading">My Services<span>.</span></h2></div>
        <p>From the first interface<br />to the intelligence behind it.</p>
      </header>
      <div className="services-explorer" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
        {services.map(({id, title, label, description, tools, Icon, color}, index) => {
          const active = activeId === id;
          return (
            <article key={id} className={`service-panel${active ? " is-active" : ""}`} style={{"--service-accent":color}}>
              <h3 className="service-panel-heading">
                <button id={`service-trigger-${id}`} type="button" className="service-trigger" aria-expanded={active} aria-controls={`service-content-${id}`} onClick={()=>setActiveId(id)}>
                  <Icon className="service-icon" aria-hidden="true" />
                  <span className="service-title">{title}</span>
                  <span className="service-toggle" aria-hidden="true">{active ? <FiCheck /> : <FiPlus />}</span>
                </button>
              </h3>
              <div id={`service-content-${id}`} role="region" aria-labelledby={`service-trigger-${id}`} className="service-content" hidden={!active}>
                <ServiceIllustration type={id} />
                <p className="service-label">{label}</p>
                <p className="service-description">{description}</p>
                <ul className="service-tools" aria-label="Skills and technologies">{tools.map(tool=><li key={tool}>{tool}</li>)}</ul>
              </div>
              <span className="service-number" aria-hidden="true">0{index+1}</span>
            </article>
          );
        })}
      </div>
      <p className="services-hint"><span aria-hidden="true">↗</span> Pick a service to explore</p>
    </section>
  );
}
