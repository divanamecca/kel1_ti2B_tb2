import "./Faq.css"
import { useEffect, useState } from "react";

const Faq = (props) => { 
    const {question, answer} = props

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
                <h3>{question}</h3>
                <div className={`answer-box ${isActive ? 'active' : ''}`}>
                    <p style={{fontWeight : "bold"}}>{answer}</p>
                </div>
            </div>
        </>
    )
}

export default Faq;