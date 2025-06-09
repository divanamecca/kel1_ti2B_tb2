import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./../main.css";
import "./../css/Restaurant.css";
import restaurants from "./../konten/data";


const Restaurant = () => {
    const { slug } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        const filteredRestaurant = restaurants.konten.filter((item) => item.slug === slug);
        setData(...filteredRestaurant)
    },[])

    return (
        <div className="wrapper">
            <Navbar/>
            <div className="content">
                <div className="container">
                    <div className="restaurant">
                        <div className="restaurant-img">
                            <img src={`../${data.image}`} alt={data.nama_lokasi} />
                        </div>
                        <div className="restaurant-info">
                            <div className="restaurant-title">
                                <p> {data.nama_lokasi} </p>
                                <div className="restaurant-ratings">
                                    <span className="stars">
                                        {"★".repeat(Math.floor(data.rating))}
                                        {"☆".repeat(5 - Math.floor(data.rating))}
                                    </span>
                                    <span className="rating-value">{data.rating} / 5</span>
                                </div>
                            </div>
                            <div className="restaurant-description">
                                <p>
                                    {data.description}
                                </p>
                            </div>
                            <div className="restaurant-address">
                                <p className="address">
                                    Lokasi : {data.lokasi}
                                </p>
                                <iframe className="restaurant-map" src={data.map} width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Restaurant;