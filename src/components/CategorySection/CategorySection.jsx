import "./CategorySection.css";
import { NavLink } from "react-router-dom";
import RestaurantCard from "../RestoCard/RestoCard";
import {useState, useEffect} from "react";
import restaurantsData from "../../konten/data";

const CategorySection = ({ title, slug }) => {
  const [restaurants, setRestaurants] = useState([]);
  const { konten } = restaurantsData;

  useEffect(() => {
    const filteredRestaurants = konten.filter(resto => resto.kategori === slug);
    setRestaurants(filteredRestaurants);
  }, [slug]);

  return (
    <>
        <div className="category-section">
          <h2 className="category-title">{title}</h2>
          <div className="restaurant-list">
            {restaurants.map((resto, index) => (
              <RestaurantCard
                key={index}
                image={resto.image}
                nama_lokasi={resto.nama_lokasi}
                rating={resto.rating}
                lokasi={resto.lokasi}
                slug={resto.slug}
              />
            ))}
          </div>
        </div>
    </>
  );
};

export default CategorySection;
