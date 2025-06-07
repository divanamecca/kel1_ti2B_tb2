import "./RestoCard.css";
import { NavLink } from "react-router-dom";

function RestaurantCard({ image, nama_lokasi, rating, lokasi, slug }) {
  return (
    <NavLink to={`/restaurant/${slug}`}>
      <div className="restaurant-card">
        <img src={image} alt={nama_lokasi} className="restaurant-img" />
        <h3 className="resto-name">{nama_lokasi}</h3>
        <div className="rating-section">
          <span className="stars">
            {"★".repeat(Math.floor(rating))}
            {"☆".repeat(5 - Math.floor(rating))}
          </span>
          <span className="rating-value">{rating}</span>
        </div>
        <p className="resto-location">{lokasi}</p>
      </div>
    </NavLink> 
  );
}
export default RestaurantCard;
