import "./RestoCard.css";

function RestaurantCard({ image, nama_lokasi, rating, lokasi }) {
  return (
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
  );
}
export default RestaurantCard;
