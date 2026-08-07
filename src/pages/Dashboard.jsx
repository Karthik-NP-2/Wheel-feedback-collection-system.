import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalFeedback: 0,
    averageRating: 0,
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/dashboard"
      );

      setStats(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="dashboard-container">
        <h1>Dashboard</h1>

        <div className="dashboard-cards">

          <div className="card">
            <h2>👤 Users</h2>
            <h1>{stats.totalUsers}</h1>
          </div>

          <div className="card">
            <h2>💬 Feedback</h2>
            <h1>{stats.totalFeedback}</h1>
          </div>

          <div className="card">
            <h2>⭐ Average Rating</h2>
            <h1>{stats.averageRating}</h1>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;