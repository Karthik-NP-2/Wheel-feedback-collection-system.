import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [editingId, setEditingId] = useState(null);

  const [editData, setEditData] = useState({
    rating: "",
    message: "",
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/feedback/my/karthikking92310@gmail.com"
      );

      setFeedbacks(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (feedback) => {
    setEditingId(feedback._id);

    setEditData({
      rating: feedback.rating,
      message: feedback.message,
    });
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(
        `http://localhost:5000/api/feedback/${id}`,
        editData
      );

      alert("Feedback Updated Successfully");

      setEditingId(null);

      fetchFeedback();
    } catch (error) {
      alert("Update Failed");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this feedback?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/feedback/${id}`
      );

      alert("Feedback Deleted Successfully");

      fetchFeedback();
    } catch (error) {
      alert("Delete Failed");
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <h2 style={{ textAlign: "center", marginTop: "40px" }}>
          Loading...
        </h2>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="my-feedback-container">
        <h1 className="my-feedback-title">My Feedback</h1>

        {feedbacks.length === 0 ? (
          <h3 style={{ textAlign: "center" }}>No Feedback Found</h3>
        ) : (
          <div className="feedback-grid">
            {feedbacks.map((feedback) => (
              <div className="feedback-card" key={feedback._id}>
                <h3>{feedback.name}</h3>

                <p>
                  <strong>Email:</strong> {feedback.email}
                </p>

                {editingId === feedback._id ? (
                  <>
                    <label>Rating</label>

                    <input
                      type="number"
                      min="1"
                      max="5"
                      value={editData.rating}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          rating: e.target.value,
                        })
                      }
                    />

                    <label>Message</label>

                    <textarea
                      rows="4"
                      value={editData.message}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          message: e.target.value,
                        })
                      }
                    />

                    <div className="feedback-actions">
                      <button
                        className="edit-btn"
                        onClick={() => handleUpdate(feedback._id)}
                      >
                        Save
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() => setEditingId(null)}
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <p>
                      <strong>Rating:</strong> ⭐ {feedback.rating}
                    </p>

                    <p>
                      <strong>Message:</strong> {feedback.message}
                    </p>

                    <p>
                      <strong>Status:</strong> {feedback.status}
                    </p>

                    <div className="feedback-actions">
                      <button
                        className="edit-btn"
                        onClick={() => handleEdit(feedback)}
                      >
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(feedback._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default MyFeedback;