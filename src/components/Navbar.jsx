import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Feedback System</h2>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/feedback">Feedback</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/register">Register</Link>
      </li>
      </ul>
    </nav>
  );
}

export default Navbar;