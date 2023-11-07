import React from "react";
import './about.css';
import Header from "../../components/header/Header";
import Section from "../../components/elsewheresection/Section";
import JoinUs from "../../components/joinus/JoinUs";
import Footer from "../../components/footer/Footer";
import Baggage from '../../components/IMG/Frame2.png';
import Person from '../../components/IMG/Frame3.png';
import Callcenter from '../../components/IMG/Callcenter.png';
import Callcenter1 from '../../components/IMG/Callcenter1.png';


const ABOUT = () => {
    return(
        <div>
            <Header/>
            <div className="video">
                <div className="texts">
                    <h1>About us</h1>
                    <p>Discover Our Passion for Travel and Adventure.</p>
                </div>
            </div>
            <div className="aboutUs">
                <div className="body">
                    <div className="texts">
                        <span>Changing how the world travels</span>
                        <p>We’re on a journey to transform ordinary trips into extraordinary ones. We are your guide, bringing you personal experiences. Wherever your travels take you, we’ll show you the unique and unmissable things to do in your destination. With GetYourGuide on your side (and in your pocket), creating memorable moments has never been easier. Today, millions have used GetYourGuide to turn their travel dreams into reality. And we’re just getting started. We're changing the way people connect to the places they visit so anyone can create their dream vacation. It’s your journey, your way.</p>
                    </div>
                </div>
            </div>
            <div className="whyUsSection">
                <div className="whyUs">
                    <h2>Why us?</h2>
                    <div className="reasons">
                        <div className="reason">
                            <div className="image"> <img src={Map} alt="" /></div>
                            <div className="text2"> <span>More than 149 travel titles currently in print</span></div>
                        </div>
                        <div className="reason">
                            <div className="image"> <img src={Baggage} alt="" /></div>
                            <div className="text2"> <span>Supporting millions of travellers since 1982</span></div>
                        </div>
                        <div className="reason">
                            <div className="image"> <img src={Person} alt="" /></div>
                            <div className="text2"> <span>Our utstanding customer satisfaction </span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="localExperts">
                <div className="experts">
                    <h2>Our Local Experts</h2>
                    <div className="ourExperts">
                        <div className="frame">
                                <img src={Callcenter} alt="" className="callcenter"/>
                                <img src={Callcenter1} alt="" className="callcenter1" />
                                <p className="text3">Why trust Gary in Florida to plan your trip to South Africa?</p>
                                <p className="text4">When Angela in Johannesburg knows best.</p>
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

export default ABOUT;