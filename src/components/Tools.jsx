import { useEffect, useRef, useState } from "react";
import { FiChevronDown, FiChevronUp, FiSearch, FiX } from "react-icons/fi";
import { listTools } from "../data";
import ShinyText from "./ShinyText/ShinyText";
import "./Tools.css";

const categoryLabels = {
  frontend: "Front-end",
  backend: "Back-end",
  mobile: "Mobile",
  data: "Data & Cloud",
  design: "Design",
  workflow: "Workflow",
};
const categoryIds = [...new Set(listTools.map((tool) => tool.category || "other"))];
const categories = [
  { id: "all", label: "All tools", count: listTools.length },
  ...categoryIds.map((id) => ({
    id,
    label: categoryLabels[id] || id,
    count: listTools.filter((tool) => (tool.category || "other") === id).length,
  })),
];
const compactQuery = "(max-width: 639px)";
const previewCount = 8;

export default function Tools() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [compact, setCompact] = useState(() => typeof window !== "undefined" && window.matchMedia(compactQuery).matches);
  const searchRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const media = window.matchMedia(compactQuery);
    const updateCompact = (event) => setCompact(event.matches);
    media.addEventListener("change", updateCompact);
    return () => media.removeEventListener("change", updateCompact);
  }, []);

  const normalizedQuery = query.trim().toLowerCase();
  const filteredTools = listTools.filter((tool) => {
    const matchesCategory = category === "all" || (tool.category || "other") === category;
    const searchableText = `${tool.nama} ${tool.ket} ${categoryLabels[tool.category] || tool.category || ""}`.toLowerCase();
    return matchesCategory && searchableText.includes(normalizedQuery);
  });
  const visibleTools = compact && !expanded ? filteredTools.slice(0, previewCount) : filteredTools;
  const hasFilters = category !== "all" || query.length > 0;

  const resetFilters = () => {
    setCategory("all");
    setQuery("");
    setExpanded(false);
    searchRef.current?.focus();
  };

  const toggleExpanded = () => {
    setExpanded(!expanded);
    if (expanded) {
      window.requestAnimationFrame(() => {
        toggleRef.current?.scrollIntoView({ block: "nearest", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
      });
    }
  };

  return (
    <section className="tools-library" id="tools" aria-labelledby="tools-heading">
      <header className="tools-library-heading" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
        <div>
          <h2 id="tools-heading">Tools &amp; Technologies</h2>
          <p>My Professional Skills</p>
        </div>
        <span className="tools-total"><strong>{listTools.length}</strong> tools in my toolkit</span>
      </header>

      <div className="tools-controls">
        <div className="tools-category-strip" role="group" aria-label="Filter tools by category">
          {categories.map((item) => (
            <button key={item.id} type="button" className="tools-category" aria-pressed={category === item.id} aria-controls="tools-results" onClick={(event) => {
              setCategory(item.id);
              setExpanded(false);
              event.currentTarget.scrollIntoView({ block: "nearest", inline: "nearest" });
            }}>
              {item.label}<span>{item.count}</span>
            </button>
          ))}
        </div>
        <div className="tools-search">
          <FiSearch aria-hidden="true" />
          <input ref={searchRef} type="search" aria-label="Search tools and technologies" placeholder="Find a tool…" value={query} onChange={(event) => { setQuery(event.target.value); setExpanded(false); }} />
          {query && <button type="button" onClick={() => { setQuery(""); setExpanded(false); searchRef.current?.focus(); }} aria-label="Clear tool search"><FiX aria-hidden="true" /></button>}
        </div>
      </div>

      <div className="tools-results-heading">
        <p role="status" aria-live="polite" aria-atomic="true">{visibleTools.length} of {filteredTools.length} tools{category !== "all" ? ` in ${categories.find((item) => item.id === category)?.label}` : ""}{normalizedQuery ? ` matching “${query.trim()}”` : ""}</p>
        {hasFilters && <button type="button" onClick={resetFilters}>Reset filters <FiX aria-hidden="true" /></button>}
      </div>

      <div id="tools-results">
        {filteredTools.length ? (
          <ul className="tools-library-grid">
            {visibleTools.map((tool) => (
              <li key={tool.id} className="tool-card border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg">
                <img src={tool.gambar} alt="" width={64} height={64} loading="lazy" decoding="async" className="tool-logo object-contain bg-zinc-800 rounded-lg group-hover:bg-zinc-900 transition-all duration-300" />
                <div className="tool-card-copy">
                  <ShinyText text={tool.nama} disabled={false} speed={3} className="tool-name" />
                  <p className="tool-type">{tool.ket}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="tools-empty">
            <FiSearch aria-hidden="true" /><h3>No tools found.</h3><p>Try another name or explore a different category.</p>
            <button type="button" onClick={resetFilters}>Clear filters</button>
          </div>
        )}
      </div>

      {compact && filteredTools.length > previewCount && (
        <button ref={toggleRef} className="tools-expand" type="button" aria-expanded={expanded} aria-controls="tools-results" onClick={toggleExpanded}>
          {expanded ? "Show less" : `Show all ${filteredTools.length} tools`}
          {expanded ? <FiChevronUp aria-hidden="true" /> : <FiChevronDown aria-hidden="true" />}
        </button>
      )}
    </section>
  );
}
