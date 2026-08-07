import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  return (
    <>
      <Navbar />

      <div className="feedback-container">
        <div className="feedback-card">
          <h2>Login</h2>

          <form>
            <input
              type="email"
              placeholder="Enter Email"
            />

            <input
              type="password"
              placeholder="Enter Password"
            />

            <button type="submit">
              Login
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;