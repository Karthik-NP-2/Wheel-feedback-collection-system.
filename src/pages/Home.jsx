import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div className="home">
        <h1>Welcome to Feedback Collection System</h1>

        <p>
          Collect, manage and analyze customer feedback easily.
        </p>

        <button>Get Started</button>
      </div>
    </>
  );
}

export default Home;