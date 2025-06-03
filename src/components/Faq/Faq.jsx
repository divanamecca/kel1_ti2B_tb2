import "./Faq.css"
const Faq = () => { 
    const handleClick = () => {
        console.log('clicked');
    }
    
    return (
        <>
            <div className="questions" onClick={handleClick}>
                <h3>
                    What are the most popular restaurants in Jakarta?
                </h3>
            </div>
        </>
    )
}

export default Faq;