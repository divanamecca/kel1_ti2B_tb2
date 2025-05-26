import "./Hero.css";
const Hero = (props) => {
    const { image, children } = props
    return (
        <>
            <div className="hero">
                <div className="hero-content">
                    <div className="hero-image">
                        <img src={image} alt="hero-image" />
                    </div>
                    <div className="hero-body">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;