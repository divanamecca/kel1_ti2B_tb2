import "./Card.css"
import { Link } from "react-router-dom"
const Card = (props) => {
    const {image, title, slug} = props
    return (
        <>
            <Link to={`/categories/${slug}`}>
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
            </Link>
        </>
    )
}

export default Card;