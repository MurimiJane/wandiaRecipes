import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footerm";
import ScrollToTop from "../Components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import saladBg from "../Images/saladbg.jpg";
import mealsBg from "../Images/mealsbg.jpg";
import chickenBg from "../Images/chickenbg.jpg";
import coffeeBg from "../Images/coffeebg.jpg";
import { Link, useLocation } from "react-router-dom";

const categories = [
  { to: "/salads",       title: "Salads",       note: "Fresh, crunchy, ready in minutes",   image: saladBg },
  { to: "/Simplemeals",  title: "Simple meals", note: "Weeknight dinners without the fuss", image: mealsBg },
  { to: "/chickenmeals", title: "Chicken",      note: "Grilled, roasted, stewed and fried", image: chickenBg },
  { to: "/coffee",       title: "Coffee",       note: "Iced, hot and everything between",   image: coffeeBg },
];

const getInitials = (name = "") =>
  name.trim().split(/\s+/).slice(0, 2).map((w) => w[0]?.toUpperCase()).join("") || "?";

function Home() {
  // Navbar links from other pages go to "/#section": scroll to it once Home has rendered
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash]);

  // Load saved feedback; keep only the fields we need (drops old tempName/isEditing leftovers)
  const [feedbackList, setFeedbackList] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("feedbackList")) || [];
      return saved.map(({ id, name, message }) => ({ id, name, message }));
    } catch {
      return [];
    }
  });

  // Only one card is edited at a time; its draft lives here
  const [editingId, setEditingId] = useState(null);
  const [draft, setDraft] = useState({ name: "", message: "" });

  useEffect(() => {
    try {
      localStorage.setItem("feedbackList", JSON.stringify(feedbackList));
    } catch {
      /* storage full or blocked: ignore */
    }
  }, [feedbackList]);

  const handleFeedbackSubmit = (name, message) => {
    setFeedbackList((prev) => [{ id: Date.now(), name, message }, ...prev]); // newest first
  };

  const handleDeleteFeedback = (id) => {
    setFeedbackList((prev) => prev.filter((fb) => fb.id !== id));
    if (editingId === id) setEditingId(null);
  };

  const startEdit = (fb) => {
    setEditingId(fb.id);
    setDraft({ name: fb.name, message: fb.message });
  };

  const saveEdit = () => {
    if (!draft.name.trim() || !draft.message.trim()) return;
    setFeedbackList((prev) =>
      prev.map((fb) =>
        fb.id === editingId
          ? { ...fb, name: draft.name.trim(), message: draft.message.trim() }
          : fb
      )
    );
    setEditingId(null);
  };

  return (
    <div style={{ fontFamily: "Megante" }} className="App">
      {/* HERO: unchanged */}
      <div className="section1" id="intro">
        <Navbar />
        <div className="intro">
          <h1>COOK<br />WITH WANDIA</h1>
        </div>
      </div>

      {/* CATEGORIES */}
      <section className="Section2" id="Categories">
        <div className="categories">
          <h2 className="categories-title">What are you cooking today?</h2>
          <p className="categories-sub">Pick a category and start browsing recipes.</p>

          <div className="category-grid">
            {categories.map((cat) => (
              <Link
                key={cat.to}
                to={cat.to}
                className="category-card"
                style={{ "--img": `url(${cat.image})` }}
              >
                <span className="category-name">{cat.title}</span>
                <span className="category-note">{cat.note}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEEDBACK */}
      <section className="section3" id="feedback">
        <div className="feedback-wrap">
          <h2 className="feedback-title">What people are saying</h2>
          <p className="feedback-sub">
            Notes from people who cooked along. Leave yours in the form below.
          </p>

          {feedbackList.length === 0 ? (
            <div className="feedback-empty">
              <p>No comments yet. Try a recipe, then tell Wandia how it went.</p>
              <a href="#contact" className="btn-wandia">Leave a comment</a>
            </div>
          ) : (
            <ul className="feedback-grid">
              {feedbackList.map((fb) => (
                <li key={fb.id} className="feedback-card">
                  {editingId === fb.id ? (
                    <div className="feedback-edit">
                      <label className="visually-hidden" htmlFor={`name-${fb.id}`}>Your name</label>
                      <input
                        id={`name-${fb.id}`}
                        type="text"
                        className="form-control"
                        value={draft.name}
                        onChange={(e) => setDraft({ ...draft, name: e.target.value })}
                        placeholder="Your name"
                      />
                      <label className="visually-hidden" htmlFor={`msg-${fb.id}`}>Your comment</label>
                      <textarea
                        id={`msg-${fb.id}`}
                        className="form-control"
                        rows={4}
                        value={draft.message}
                        onChange={(e) => setDraft({ ...draft, message: e.target.value })}
                        placeholder="Your comment"
                      />
                      <div className="feedback-actions">
                        <button className="btn-wandia" onClick={saveEdit}>Save</button>
                        <button className="btn-quiet" onClick={() => setEditingId(null)}>Cancel</button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="feedback-message">{fb.message}</p>
                      <div className="feedback-footer">
                        <span className="feedback-avatar" aria-hidden="true">{getInitials(fb.name)}</span>
                        <span className="feedback-name">{fb.name}</span>
                        <span className="feedback-actions">
                          <button className="btn-quiet" onClick={() => startEdit(fb)}>Edit</button>
                          <button className="btn-quiet btn-quiet-danger" onClick={() => handleDeleteFeedback(fb.id)}>
                            Delete
                          </button>
                        </span>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <section className="section4" id="contact">
        <Footer onFeedbackSubmit={handleFeedbackSubmit} />
        <ScrollToTop />
      </section>
    </div>
  );
}

export default Home;