import React, { useState } from "react";
import { Link } from "react-router-dom";

// Contact details: replace the email and the social links with Wandia's real ones
const phone = "+254 736 285 117";
const email = "hello@example.com";
const socials = [
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "TikTok",    href: "https://tiktok.com/" },
  { label: "YouTube",   href: "https://youtube.com/" },
];

function Footerm({ onFeedbackSubmit }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError("Please add your name and a comment.");
      setSent(false);
      return;
    }
    onFeedbackSubmit?.(name.trim(), message.trim());
    setName("");
    setMessage("");
    setError("");
    setSent(true);
  };

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-form-col">
          <h2 className="footer-title">Tried a recipe? Tell us how it went.</h2>
          <p className="footer-sub">Your comment shows up in the section above.</p>

          <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="fb-name">Your name</label>
            <input
              id="fb-name"
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => { setName(e.target.value); setSent(false); }}
              autoComplete="name"
            />

            <label htmlFor="fb-message">Your comment</label>
            <textarea
              id="fb-message"
              className="form-control"
              rows={4}
              value={message}
              onChange={(e) => { setMessage(e.target.value); setSent(false); }}
            />

            {error && <p className="footer-error" role="alert">{error}</p>}
            {sent && <p className="footer-success" role="status">Thanks, your comment is posted.</p>}

            <button type="submit" className="btn-wandia btn-wandia-light">Post comment</button>
          </form>
        </div>

        <div className="footer-right">
          <nav className="footer-block footer-recipes" aria-label="Recipe categories">
            <h3>Recipes</h3>
            <ul>
              <li><Link to="/salads">Salads</Link></li>
              <li><Link to="/Simplemeals">Simple meals</Link></li>
              <li><Link to="/chickenmeals">Chicken</Link></li>
              <li><Link to="/coffee">Coffee</Link></li>
            </ul>
          </nav>

          <div className="footer-block footer-contact">
            <h3>Contact</h3>
            <ul>
              <li className="footer-name">Wandia</li>
              <li><a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a></li>
              <li><a href={`mailto:${email}`}>{email}</a></li>
            </ul>
          </div>

          <div className="footer-block footer-social">
            <h3>Follow along</h3>
            <ul>
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <p className="footer-copy">© {new Date().getFullYear()} Cook with Wandia</p>
    </footer>
  );
}

export default Footerm;