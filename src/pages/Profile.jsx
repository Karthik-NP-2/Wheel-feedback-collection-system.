import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Profile() {
  return (
    <>
      <Navbar />

      <div className="profile-container">

        <div className="profile-card">

          <img
            src="https://ui-avatars.com/api/?name=Karthik+King&background=2563eb&color=fff&size=180"
            alt="Profile"
            className="profile-image"
          />

          <h2>Karthik King</h2>

          <p>
            <strong>Email:</strong>
            <br />
            karthikking92310@gmail.com
          </p>

          <p>
            <strong>Phone:</strong>
            <br />
            Not Added
          </p>

          <button>Edit Profile</button>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Profile;