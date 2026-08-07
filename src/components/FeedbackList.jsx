import { useEffect, useState } from "react";
import axios from "axios";

function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/feedback"
      );

      setFeedbacks(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h3>Loading Feedback...</h3>;
  }

  return (
    <div className="feedback-list">
      <h2>Feedback List</h2>

      {feedbacks.length === 0 ? (
        <p>No Feedback Available</p>
      ) : (
        feedbacks.map((feedback) => (
          <div className="feedback-item" key={feedback._id}>
            <h3>{feedback.name}</h3>

            <p>
              <strong>Email:</strong> {feedback.email}
            </p>

            <p>
              <strong>Rating:</strong> ⭐ {feedback.rating}
            </p>

            <p>{feedback.message}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default FeedbackList;