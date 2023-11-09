import React from "react";
import './faq.css';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const FAQ = () => {
    return(
        <div>
            <Header/>
            <div className="video video_faq">
                <div className="texts">
                    <h1>FAQ</h1>
                    <p>Unlocking the Mysteries of Travel: Your Questions, Our Journey.</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default FAQ;