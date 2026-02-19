import React, { useState } from "react";
import { FaUser, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Footer({ onFeedbackSubmit }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !message) return;

    onFeedbackSubmit(name, message);

    setName("");
    setMessage("");
  };

  return (
    <>
      <div className="footer">
        {/* FEEDBACK FORM */}
        <form className="feedback" onSubmit={handleSubmit}>
          <h3>Leave Feedback</h3>

          <div className="input-tab">
            <input
              type="text"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label className="input-label">Your Name</label>
          </div>

          <div className="input-tab">
            <textarea
              className="input msgtab"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <label className="input-label">Your Feedback</label>
          </div>

          <button type="submit" className="submit">
            Submit
          </button>
        </form>

        {/* CONTACT INFO */}
       <div className="contacts">
        <h3>Contacts</h3>
  <div className="name">
    <FaUser className="contact-icon" />
    <p>Faith Wandia</p>
  </div>

  <div className="phone">
    <FaPhoneAlt className="contact-icon" />
    <p>+254 700 000 000</p>
  </div>

  <div className="gmail">
    <FaEnvelope className="contact-icon" />
    <p>cookwithwandia@gmail.com</p>
  </div>
</div>

      </div>

      {/* COPYRIGHT */}
      <div className="copyright">
        © 2026 Recipes by Wandia. All rights reserved.
      </div>
    </>
  );
}

export default Footer;
