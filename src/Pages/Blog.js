import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import wandiaPhoto from "../Images/wandia.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footerm";

const pillars = [
  {
    title: "Culinary passion",
    text: "Wandia is a passionate chef with a love for creating memorable culinary experiences.",
  },
  {
    title: "Culinary inspiration",
    text: "My recipes are inspired by a rich tapestry of flavours from different cultures.",
  },
  {
    title: "Welcome to the journey",
    text: "Join Wandia on a journey through a world of delectable dishes and gastronomical delights.",
  },
];

function Blog() {
  return (
    <div style={{ fontFamily: "Megante" }} className="App">
      {/* Hero */}
      <header className="blog-hero">
        <Navbar />
        <div className="blog-hero-body">
          <div className="blog-hero-text">
            <h1>Faith Wandia</h1>
            <p>A cook who finds cooking therapeutic.</p>
          </div>
          <img
            src={wandiaPhoto}
            className="blog-hero-img"
            alt="Portrait of Faith Wandia"
          />
        </div>
      </header>

      {/* Note from Wandia */}
      <section className="blog-note" aria-labelledby="blog-note-title">
        <blockquote className="blog-letter">
          <h2 id="blog-note-title">A light note from Wandia</h2>
          <p>
            This is a PDF cookbook dedicated to everyone who loves cooking and
            finds it therapeutic. It’s a collection of 34 recipes that I have
            tried and that have worked out well.
          </p>
          <p>
            I hope it helps you step out of your comfort zone in the kitchen:
            learn new ideas, enjoy a wider variety of food and cook in
            different styles.
          </p>
          <p className="blog-sign">
            Yours truly,
            <br />
            Wandia
          </p>
        </blockquote>
      </section>

      {/* What Wandia is about */}
      <section className="blog-pillars">
        <div className="blog-pillars-grid">
          {pillars.map((p) => (
            <article key={p.title} className="blog-pillar">
              <h2>{p.title}</h2>
              <p>{p.text}</p>
            </article>
          ))}
        </div>

        <div className="blog-cta">
          <Link to="/#Categories" className="btn-wandia">
            Browse the recipes
          </Link>
        </div>
      </section>

      <div className="section4">
        <Footer />
      </div>
    </div>
  );
}

export default Blog;