import "./Faq.css"
import { useEffect, useState } from "react";

const Faq = () => { 

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const answerBox = document.querySelector('.answer-box');
        if (isActive) {
            answerBox.classList.add('active');
        } else {
            answerBox.classList.remove('active');
        }
    }, [isActive]);
    
    return (
        <>
            <div className="questions" onClick={() => setIsActive(!isActive)}>
                <h3>
                    What are the most popular restaurants in Jakarta?
                </h3>
                <div className={`answer-box ${isActive ? 'active' : ''}`}>
                    <p>
                        Some of the most popular restaurants in Jakarta include:
                        These restaurants are known for their delicious food and great service.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Faq;