import React, { useEffect, useState } from "react";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footerm';
import ScrollToTop from "../Components/ScrollToTop";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function Home() {
  const [feedbackList, setFeedbackList] = useState(() => {
    const saved = localStorage.getItem("feedbackList");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("feedbackList", JSON.stringify(feedbackList));
  }, [feedbackList]);

  const handleFeedbackSubmit = (name, message) => {
    setFeedbackList((prev) => [
      ...prev,
      { id: Date.now(), name, message, isEditing: false, tempName: name, tempMessage: message },
    ]);
  };

  const handleDeleteFeedback = (id) => {
    setFeedbackList(feedbackList.filter((fb) => fb.id !== id));
  };

  const handleEditClick = (id) => {
    setFeedbackList(feedbackList.map(fb => fb.id === id ? { ...fb, isEditing: true } : fb));
  };

  const handleEditChange = (id, field, value) => {
    setFeedbackList(feedbackList.map(fb =>
      fb.id === id ? { ...fb, [field]: value } : fb
    ));
  };

  const handleSaveEdit = (id) => {
    setFeedbackList(feedbackList.map(fb =>
      fb.id === id ? {
        ...fb,
        name: fb.tempName,
        message: fb.tempMessage,
        isEditing: false
      } : fb
    ));
  };

  const handleCancelEdit = (id) => {
    setFeedbackList(feedbackList.map(fb =>
      fb.id === id ? {
        ...fb,
        tempName: fb.name,
        tempMessage: fb.message,
        isEditing: false
      } : fb
    ));
  };

  return (
    <div style={{ fontFamily: 'Megante' }} className="App">
      <div className="section1" id="intro">
        <Navbar />
        <div className="intro">
          <h1>COOK<br />WITH WANDIA</h1>
        </div>
      </div>

      <div className="Section2" id="Categories">
        <div className="categories">
          <h1>Recipes by categories</h1>
          <div className="containers">
            <div className="container1">
              <span className="category-text">
                <Link to="/salads">Salads</Link>
              </span>
            </div>

            <div className="container2">
              <span className="category-text">
                <Link to="/Simplemeals">Simple meals</Link>
              </span>
            </div>

            <div className="container3">
              <span className="category-text">
                <Link to="/chickenmeals">Chicken</Link>
              </span>
            </div>

            <div className="container4">
              <span className="category-text">
                <Link to="/coffee">Coffee</Link>
              </span>
            </div>

          </div>
        </div>
      </div>




      <div className="section3" id="feedback">
        <h2>What People Are Saying</h2>

        <ul className="feedback-list" style={{
          maxHeight: '400px',  // adjust as needed
          overflowY: 'auto',
          padding: '0',
          margin: '0'
        }}>
          {feedbackList.map((feedback) => (
            <li key={feedback.id} className="feedback-card">
              {feedback.isEditing ? (
                <div className="feedback-editing">
                  <input
                    type="text"
                    value={feedback.tempName}
                    onChange={(e) => handleEditChange(feedback.id, 'tempName', e.target.value)}
                    className="edit-input form-control mb-2"
                    placeholder="Your Name"
                  />
                  <textarea
                    value={feedback.tempMessage}
                    onChange={(e) => handleEditChange(feedback.id, 'tempMessage', e.target.value)}
                    className="edit-textarea form-control mb-2"
                    placeholder="Your Feedback"
                    rows={3}
                  />
                  <div className="feedback-actions">
                    <button className="btn dark-btn me-2" onClick={() => handleSaveEdit(feedback.id)}>Save</button>
                    <button className="btn btn-secondary" onClick={() => handleCancelEdit(feedback.id)}>Cancel</button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="feedback-header">
                    <span className="feedback-name">{feedback.name}</span>
                  </div>
                  <p className="feedback-message">{feedback.message}</p>
                  <div className="feedback-actions">
                    <button className="btn dark-btn me-2 " onClick={() => handleEditClick(feedback.id)}>Edit</button>
                    <button className="btn btn-danger" onClick={() => handleDeleteFeedback(feedback.id)}>Delete</button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>



      <div className="section4" id="contact">
        <Footer onFeedbackSubmit={handleFeedbackSubmit} />

        {/* scroll-to-top button */}
        <ScrollToTop />
      </div>
    </div>
  );
}

export default Home;
