import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar";
import { useEffect } from "react";

const Categories = () => {
     
    const { slug } = useParams();

    useEffect(() => {

    },[]);

    return (
        <>
            <div className="wrapper">
                <Navbar/>
                <div className="container">

                </div>
            </div>
            
        </>
    )
}

export default Categories