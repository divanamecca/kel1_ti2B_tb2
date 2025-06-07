import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
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
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.353226185666!2d106.80838437499361!3d-6.602952093390945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5dc120272b5%3A0xa60f986acaaa4b3a!2sKluwih%20Sunda!5e0!3m2!1sen!2sid!4v1749206584098!5m2!1sen!2sid" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Restaurant;