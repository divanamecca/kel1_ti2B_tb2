import "./Card.css"
import { NavLink } from "react-router-dom"
const Card = (props) => {
    const {image, title} = props
    return (
        <>
            <NavLink to={`/categories`}>
                <div className="card">
                    <div className="card-image">
                        <img src={image} alt="card-image"/>
                    </div>
                    <div className="card-title">
                        <p>
                            {title}
                        </p>
                    </div>
                </div>
            </NavLink>
        </>
    )
}

export default Card;