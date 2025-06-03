import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Card from "../components/Card/Card";
import Faq from "../components/Faq/Faq";
import "./../css/Home.css";
import { useEffect, useState } from "react";


const Home = () => {
    const [data, setData] = useState([]);
    const fetchAPI = async () => {
    try {
        const response = await fetch('http://localhost:5173/konten/kategori.json');
        const  { kategori } = await response.json();
        setData(kategori)
    } catch (error) {
        console.log(error)
    }
    };

    useEffect(() => {
        fetchAPI();
    }, [])
    
    useEffect(() => {
        console.log(data)
    }, [data])

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
                                {data.map((item, index)=> {
                                    return(
                                        <Card image={item.image} title={item.nama} key={index} slug={item.slug}/>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="faq-section">
                            <div className="faq-box" >
                                <div className="faq-head" id="faq-box">
                                    <h1 className="faq-title">
                                        Frequently Asked Questions about JakCulinary.
                                    </h1>
                                </div>
                                <div className="faq-body">
                                    <Faq/>
                                    <Faq/>
                                </div>
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