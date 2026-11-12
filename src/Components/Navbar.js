import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo2.png";

// The route where your Home page lives. Change this if your router uses "/home" etc.
const HOME_PATH = "/";

// `hash` = a section of the Home page, `to` = a separate page
const links = [
  { label: "Home", hash: "intro" },
  { label: "Recipes", hash: "Categories" },
  { label: "Blog", to: "/blog" },
  { label: "Feedback", hash: "feedback" },
  { label: "Contact", hash: "contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // If the section is on the current page, scroll to it smoothly.
  // If not (we're on another page), let the Link go to Home, which scrolls on arrival.
  const goTo = (e, id) => {
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
    close();
  };

  return (
    <header className="site-nav">
      <Link to={HOME_PATH} className="site-nav-logo" onClick={close}>
        <img src={logo} alt="Cook with Wandia" />
      </Link>

      <button
        type="button"
        className="site-nav-toggle"
        aria-expanded={open}
        aria-controls="site-nav-links"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? "Close" : "Menu"}
      </button>

      <nav aria-label="Main">
        <ul id="site-nav-links" className={`site-nav-links${open ? " is-open" : ""}`}>
          {links.map(({ label, hash, to }) => (
            <li key={label}>
              {to ? (
                <Link to={to} onClick={close}>{label}</Link>
              ) : (
                <Link to={`${HOME_PATH}#${hash}`} onClick={(e) => goTo(e, hash)}>{label}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;