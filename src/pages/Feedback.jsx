import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeedbackList from "../components/FeedbackList";

function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/feedback",
        {
          name: formData.name,
          email: formData.email,
          rating: Number(formData.rating),
          message: formData.message,
        }
      );

      setSuccess(response.data.message);

      setFormData({
        name: "",
        email: "",
        rating: "",
        message: "",
      });

    } catch (err) {
      setError(err.response?.data?.message || "Failed to submit feedback");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="feedback-container">
        <div className="feedback-card">
          <h2>Submit Feedback</h2>

          {success && (
            <p style={{ color: "green", textAlign: "center", marginBottom: "15px" }}>
              {success}
            </p>
          )}

          {error && (
            <p style={{ color: "red", textAlign: "center", marginBottom: "15px" }}>
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              required
            >
              <option value="">Select Rating</option>
              <option value="1">1 - Poor</option>
              <option value="2">2 - Fair</option>
              <option value="3">3 - Good</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </select>

            <textarea
              name="message"
              placeholder="Write your feedback"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit Feedback"}
            </button>
          </form>
        </div>
      </div>

      <FeedbackList />

      <Footer />
    </>
  );
}

export default Feedback;