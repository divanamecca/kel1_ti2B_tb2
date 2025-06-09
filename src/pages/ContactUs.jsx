import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "../css/ContactUs.css";
const ContactUs = () => {
    return (
        <>
            <div className="wrapper">
                <Navbar/>
                <div className="content">
                    <div className="container">
                        <div className="contact-us">
                            <h1 className="contact-us-heading">
                                Contact Us
                            </h1>
                            <div className="contact-us-content">
                                <div className="contact-us-map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.1797750485925!2d106.8210956752398!3d-6.370776193619419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec1cabb59bdf%3A0x28b4f84e4677f329!2sJakarta%20State%20Polytechnic!5e0!3m2!1sen!2sid!4v1749486471625!5m2!1sen!2sid" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                                <div className="contact-us-form">
                                    <input type="text" name="" id="" placeholder="Username" />
                                    <input type="email" name="" id="" placeholder="Email"/>
                                    <textarea name="" id="" placeholder="Message"></textarea>
                                    <button type="button">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default ContactUs;