import Navbar from "../components/Navbar";

function Feedback() {
  return (
    <>
      <Navbar />

      <div className="feedback-container">
        <div className="feedback-card">
          <h2>Submit Feedback</h2>

          <form>
            <input
              type="text"
              placeholder="Enter Your Name"
            />

            <input
              type="email"
              placeholder="Enter Your Email"
            />

            <select>
              <option>Select Rating</option>
              <option>1 - Poor</option>
              <option>2 - Fair</option>
              <option>3 - Good</option>
              <option>4 - Very Good</option>
              <option>5 - Excellent</option>
            </select>

            <textarea
              placeholder="Write your feedback"
              rows="5"
            ></textarea>

            <button type="submit">
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Feedback;