import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Feedback System</h2>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/feedback">Feedback</Link>
        </li>

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/register">Register</Link>
        </li>

        <li>
  <Link to="/my-feedback">My Feedback</Link>
</li>

<li>
  <Link to="/profile">Profile</Link>
</li>
      </ul>
    </nav>
  );
}

export default Navbar;