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
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/feedback/${id}`
      );

      setFeedbacks(feedbacks.filter((item) => item._id !== id));

      alert("Feedback Deleted Successfully");
    } catch (error) {
      alert("Delete Failed");
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await axios.put(
        `http://localhost:5000/api/feedback/${id}/status`,
        {
          status,
        }
      );

      setFeedbacks(
        feedbacks.map((item) =>
          item._id === id ? { ...item, status } : item
        )
      );

      alert("Status Updated Successfully");
    } catch (error) {
      alert("Status Update Failed");
    }
  };

  if (loading) {
    return <h2>Loading Feedback...</h2>;
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

            <p>
              <strong>Status:</strong>
            </p>

            <select
              value={feedback.status}
              onChange={(e) =>
                handleStatusChange(
                  feedback._id,
                  e.target.value
                )
              }
            >
              <option value="Pending">Pending</option>
              <option value="Reviewed">Reviewed</option>
              <option value="Resolved">Resolved</option>
            </select>

            <br />
            <br />

            <button
              onClick={() =>
                handleDelete(feedback._id)
              }
            >
              Delete
            </button>

          </div>
        ))
      )}
    </div>
  );
}

export default FeedbackList;