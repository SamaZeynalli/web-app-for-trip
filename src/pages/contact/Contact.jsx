import React from "react";
import './contact.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Section from '../../components/elsewheresection/Section';
import JoinUs from "../../components/joinus/JoinUs";


const CONTACT = () => {
    return(
        <div>
            <Header/>
            <div className="video video_contact">
                <div className="texts">
                    <h1>Contact us</h1>
                    <p>Your Journey Begins with a Conversation - Reach Out to Us Today!</p>
                </div>
            </div>
            <div className="contacts_section">
                <div className="contacts">
                    <div className="content_contact">
                        <h2>Commercial Contacts</h2>
                        <div className="content_contact">
                            <div className="ads">
                                <p>To advertise on Tourista:</p>
                                <span>advertise@tourista.com</span>
                            </div>
                            <div className="ads">
                                <p>To become an affiliate partner:</p>
                                <span>affiliate@tourista.com</span>
                            </div>
                            <div className="ads">
                                <p>To contact the hotels team:</p>
                                <span>hotels@tourista.com</span>
                            </div>
                            <div className="ads">
                                <p>Send your request to republish Tourista content:</p>
                                <span>contentlicensing@tourista.com</span>
                            </div>
                            <div className="ads">
                                <p>To contact the experiences team:</p>
                                <span>experiences@tourista.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="content_contact">
                        <div className="content_contact">
                            <h2>Content Contact</h2>
                            <div className="ads">
                                <p>To report an issue to our content teams please contact: </p>
                                <span>corrections@tourista.com</span>
                            </div>
                        </div>
                        <div className="content_contact">
                            <h2>Press Contact</h2>
                            <div className="ads">
                                <p>If you’re a journalist / influencer with a press enquiry about Tourista, please contact our press office:</p>
                                <span>pr@tourista.com</span>
                            </div>
                        </div>
                        <div className="content_contact">
                            <h2>Partnership Contact</h2>
                            <div className="ads">
                                <p>For partnership opportunities:</p>
                                <span>partnerships@tourista.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Section/>
            <JoinUs/>
            <Footer/>
        </div>
    )
}

export default CONTACT;