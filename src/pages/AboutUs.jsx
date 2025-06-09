import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./../css/AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <div className="content">
            <div className="about-us-section">
              <div className="about-us-content">
                <div className="about-us-description">
                  <h1> About us </h1>
                  <p>JakCulinary is your trusted culinary guide for discovering the best flavors in the Greater Jakarta area (Jabodetabek). We curate a wide range of dining recommendations — from hidden street food gems to popular restaurants — all based on high ratings and genuine reviews from food enthusiasts.</p>
                </div>
                <div className="about-us-img">
                  <img src={"./images/cafe.jpg"} alt="" />
                </div>
              </div>
              <div className="about-us-content">
                <div className="about-us-description">
                  <h1>Our Mission</h1>
                  <p>We believe that a satisfying dining experience starts with accurate and honest information. That’s why every recommendation on JakCulinary goes through a strict selection process, considering taste, ambiance, service, and price.</p>
                </div>
                <div className="about-us-img">
                  <img src={"./images/cafe.jpg"} alt="" />
                </div>
              </div>
            </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default AboutUs;
