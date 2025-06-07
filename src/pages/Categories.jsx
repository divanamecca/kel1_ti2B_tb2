import Navbar from "../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import kategori from "../konten/kategori";
import restaurants from "../konten/data";
import "./../main.css"
import "./../css/Categories.css";
import RestaurantCard from "../components/RestoCard/RestoCard"

const Categories = () => {
    const [category, setCategory] = useState('');
    const [data, setData] = useState([]);
     
    const { slug } = useParams();

    useEffect(() => {
        const cat = kategori.kategori.filter(item => item.slug === slug);
        setCategory(cat[0]);
    },[]);

    useEffect(() => {
        const filteredRestaurants = restaurants.konten.filter(item => item.kategori === slug);
        setData(filteredRestaurants);
    }, []);
    return (
        <>
            <div className="wrapper">
                <Navbar/>
                <div className="content">
                    <div className="container">
                        <div className="title">
                            <h2> {category.nama} </h2>
                        </div>
                        <div className="restaurants">
                            {data.map((item,index) => {
                                return(
                                    <RestaurantCard key={index} slug={item.slug} image={`../${item.image}`} nama_lokasi={item.nama_lokasi} rating={item.rating} lokasi={item.lokasi}/>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Categories