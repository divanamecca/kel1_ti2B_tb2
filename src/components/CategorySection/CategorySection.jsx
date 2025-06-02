import "./CategorySection.css";
import { NavLink } from "react-router-dom";
import RestaurantCard from "../RestoCard/RestoCard";

const CategorySection = ({ title, restaurants }) => {
  return (
    <>
      <NavLink to={`/resto`}>
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
              />
            ))}
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default CategorySection;
