import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      );

      alert(response.data.message);

      // Clear form after successful registration
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="feedback-container">
        <div className="feedback-card">
          <h2>Register</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            <button type="submit">
              Register
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Register;