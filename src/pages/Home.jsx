import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Card from "../components/Card/Card";
import "./../css/Home.css";

const Home = () => {
    return (
        <>
            <div className="wrapper">
                <Navbar/>
                <div className="content">
                    <Hero image={"./images/hero.jpg"}>
                        <h1> Help You to Find <br></br> Our Best Culinaries...</h1>
                        <button className="hero-button">
                            Start Now
                        </button>
                    </Hero>
                    <div className="container">
                        <div className="categories-section">
                            <div className="categories-head">
                                <h1 className="categories-title" >
                                    Choose What Are You Gonna <br /> <span>Eat Today... </span> 
                                </h1>
                            </div>
                            <div className="categories-body">
                                <Card image={"./images/main-food.jpg"} title={"Main food"}/>
                                <Card image={"./images/main-food.jpg"} title={"Main food"}/>
                                <Card image={"./images/main-food.jpg"} title={"Main food"}/>
                                <Card image={"./images/main-food.jpg"} title={"Main food"}/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Footer/> */}
            </div>
        </>
    )
}

export default Home;