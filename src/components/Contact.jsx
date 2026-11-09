import { useEffect, useRef, useState } from "react";
import { FiArrowRight, FiArrowUpRight, FiCheck, FiCopy, FiMail, FiMapPin, FiMessageCircle } from "react-icons/fi";
import "./Contact.css";

const email = "wahyu.setiawan.grow@gmail.com";
const topics = ["Internship opportunity", "Project collaboration", "Just saying hello"];

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const copyTimer = useRef(null);

  useEffect(() => {
    const resetSubmission = () => setIsSubmitting(false);
    window.addEventListener("pageshow", resetSubmission);
    return () => {
      window.removeEventListener("pageshow", resetSubmission);
      window.clearTimeout(copyTimer.current);
    };
  }, []);

  const copyEmail = async () => {
    window.clearTimeout(copyTimer.current);
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
    copyTimer.current = window.setTimeout(() => setCopyStatus("idle"), 4000);
  };

  return (
    <section className="contact-studio" id="contact" aria-labelledby="contact-heading">
      <div className="contact-intro" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
        <p className="contact-eyebrow">Contact me</p>
        <h2 id="contact-heading">Great things start<br />with <span>a conversation.</span></h2>
        <p className="contact-intro-text">Have an opportunity, a project, or a question? I'd love to hear about it. Let's turn a first hello into something meaningful.</p>
        <p className="contact-availability"><span aria-hidden="true" />Open to paid internship opportunities</p>

        <div className="contact-email-block">
          <p className="contact-detail-label">Drop me an email</p>
          <div className="contact-email-row">
            <a className="contact-email" href={`mailto:${email}`}>{email}</a>
            <button className="contact-copy" type="button" onClick={copyEmail} aria-label={copyStatus === "copied" ? "Email copied" : "Copy email address"}>
              {copyStatus === "copied" ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
            </button>
          </div>
          <p className="contact-copy-status" role="status">{copyStatus === "copied" ? "Email address copied." : copyStatus === "error" ? "Couldn't copy. You can use the email link above." : ""}</p>
        </div>

        <div className="contact-direct-links">
          <a className="contact-direct-link" href="https://wa.me/6283834954405" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp (opens in a new tab)">
            <FiMessageCircle className="contact-channel-icon" aria-hidden="true" />
            <span><strong>Let's chat on WhatsApp</strong><span>+62 838 3495 4405</span></span>
            <FiArrowUpRight className="contact-link-arrow" aria-hidden="true" />
          </a>
          <a className="contact-direct-link" href="https://www.linkedin.com/in/wahyu-setiawan-82320028b" target="_blank" rel="noopener noreferrer" aria-label="Connect on LinkedIn (opens in a new tab)">
            <span className="contact-linkedin-icon" aria-hidden="true">in</span>
            <span><strong>Connect on LinkedIn</strong><span>Wahyu Setiawan</span></span>
            <FiArrowUpRight className="contact-link-arrow" aria-hidden="true" />
          </a>
        </div>
        <p className="contact-location"><FiMapPin aria-hidden="true" /><span>Surabaya, Indonesia <span aria-hidden="true">·</span> UTC+7</span></p>
      </div>

      <div className="contact-compose" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100" data-aos-once="true">
        <div className="contact-compose-heading">
          <div><h3>Send a little hello.</h3><p>Tell me what you have in mind.</p></div>
          <FiMail aria-hidden="true" />
        </div>
        <form className="contact-form" action={`https://formsubmit.co/${email}`} method="POST" onSubmit={() => setIsSubmitting(true)} aria-busy={isSubmitting}>
          <fieldset className="contact-topics">
            <legend>What's on your mind?</legend>
            <div className="contact-topic-options">
              {topics.map((topic, index) => (
                <label className="contact-topic" key={topic}>
                  <input type="radio" name="_subject" value={topic} defaultChecked={index === 0} />
                  <span>{topic}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <div className="contact-fields-row">
            <div className="contact-field">
              <label htmlFor="contact-name">Your name <span aria-hidden="true">*</span></label>
              <input id="contact-name" type="text" name="Name" autoComplete="name" placeholder="What should I call you?" required maxLength={100} />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-email">Email address <span aria-hidden="true">*</span></label>
              <input id="contact-email" type="email" name="Email" autoComplete="email" placeholder="you@company.com" required maxLength={254} />
            </div>
          </div>
          <div className="contact-field">
            <label htmlFor="contact-message">Your message <span aria-hidden="true">*</span></label>
            <textarea id="contact-message" name="message" rows={5} placeholder="A little about the opportunity, your idea, or what you'd like to discuss…" required maxLength={5000} />
          </div>
          <div className="contact-submit-row">
            <p>All fields marked * are required.</p>
            <button className="contact-submit" type="submit" disabled={isSubmitting}>
              <span>{isSubmitting ? "Sending…" : "Send message"}</span><FiArrowRight aria-hidden="true" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
