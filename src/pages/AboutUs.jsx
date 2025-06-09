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
                  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nobis accusamus dolor mollitia laborum alias soluta nulla, sed facere laudantium ipsam velit exercitationem explicabo dolorem eos minima dicta odio magnam?</p>
                </div>
                <div className="about-us-img">
                  <img src={"./images/cafe.jpg"} alt="" />
                </div>
              </div>
              <div className="about-us-content">
                <div className="about-us-description">
                  <h1> About us </h1>
                  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nobis accusamus dolor mollitia laborum alias soluta nulla, sed facere laudantium ipsam velit exercitationem explicabo dolorem eos minima dicta odio magnam?</p>
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
