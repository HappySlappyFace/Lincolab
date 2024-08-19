import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Lincolab from "../components/Lincolab";
import "../styles/Home.css";
import bgImage from "../assets/images/backgroundHome.png";
function HomePage() {
  return (
    <>
      <Navbar />
      <div className="homeContainer">
        <div className="homeTopSection w-100 align-items-center d-flex flex-nowrap justify-content-center flex-column">
          <Lincolab />
          <p className="w-50">
            Dedicated to facilitating the transportation and outsourcing of
            sample analysis
          </p>
          <button className="btn">Outsource request</button>
        </div>
        <img src={bgImage} alt="" />
        <div className="homeBottomSection w-100 align-items-center d-flex flex-nowrap justify-content-center flex-column">
          <h3 className="display-6">Why should you call Lincolab?</h3>
          <p className="w-50 h6">
            Lincolab ensures secure, timely sample delivery between labs with
            real-time tracking and top-notch support. Trust us for reliable,
            compliant, and efficient laboratory logistics.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
