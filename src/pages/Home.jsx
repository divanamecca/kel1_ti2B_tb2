import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Card/Card";
import Faq from "../components/Faq/Faq";
import Footer from "../components/Footer/Footer";
import "./../css/Home.css";
import categories from "../konten/kategori";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(categories.kategori);
  }, []);

  return (
    <>
      <div className="wrapper">
        <Navbar />
        <div className="content">
          <Hero image={"./images/hero.jpg"}>
            <h1>
              {" "}
              Help You to Find <br></br> Our Best Culinaries...
            </h1>
            <Link to={"/culinaries"}>
              <button className="hero-button">Start Now</button>
            </Link>
          </Hero>
          <div className="container">
            <div className="categories-section">
              <div className="categories-head">
                <h1 className="categories-title">
                  Choose What Are You Gonna <br /> <span>Eat Today... </span>
                </h1>
              </div>
              <div className="categories-body">
                {data.map((item, index) => {
                  return (
                    <Card
                      image={item.image}
                      title={item.nama}
                      key={index}
                      slug={item.slug}
                    />
                  );
                })}
              </div>
            </div>
            <div className="faq-section">
              <div className="faq-box">
                <div className="faq-head" id="faq-box">
                  <h1 className="faq-title">
                    Frequently Asked Questions about JakCulinary.
                  </h1>
                </div>
                <div className="faq-body">
                  <Faq
                    question={"How do I find the right restaurant for me?"}
                    answer={
                      "You can browse by food category, like Family Food or Street Food. Each restaurant shows a photo, rating, and location, so it's easy to choose what you like."
                    }
                  />
                  <Faq
                    question={"Are the restaurant ratings real?"}
                    answer={
                      "Yes! All ratings are based on real reviews from customers. We make sure the info stays up-to-date and honest."
                    }
                  />
                  <Faq
                    question={"Can I suggest a restaurant to be added?"}
                    answer={
                      "Of course! Just contact us through email, and we’ll review your suggestion."
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
