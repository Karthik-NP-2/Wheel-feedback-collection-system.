import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <div className="home">
        <h1>Welcome to Feedback Collection System</h1>
        <p>Collect and manage feedback efficiently.</p>

        <button>Get Started</button>
      </div>

      <Footer />
    </>
  );
}

export default Home;