import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import './homepage.css';
import Search  from "../../components/IMG/Search_Magnifying_Glass.png";
import Map from '../../components/IMG/Frame1.png';
import Baggage from '../../components/IMG/Frame2.png';
import Person from '../../components/IMG/Frame3.png';
import Local from '../../components/IMG/Framelocal.png';
import JoinUs from "../../components/joinus/JoinUs";
import ElseSection from "../../components/elsewheresection/Section";
import { TripCard, tripsData } from "../../components/tripcard/Tripcard";
import Experts from "../../components/experts/Experts";
import ScrollToTopButton from "../../components/scrollButton/ScrollButton";



function Homepage() {

    return (
      <div>
        <Header/>
        <div className="trips picture1">
            <div className="text1">
                <div className="texts">
                    <h1>We create trips you love</h1>
                    <p>Trips you couldn't plan, even if you wanted to.</p>
                </div>
                <div className="search">
                    <input type="text" placeholder="Where do you want to go?"/>
                    <button><img src={Search} alt="" /></button>
                </div>
            </div>
        </div>
        <div className="trend_section">
                <h2>Trending now</h2>
                <div className="tripPlans">
                    {tripsData.slice(0, 3).map((trip, index) => (
                    <TripCard key={index} data={trip} />
                ))}
                </div>
        </div>
        <div className="brand">
                <h2>Brand new trips</h2>
                <div className="tripPlans">
                    {tripsData.slice(3, 6).map((trip, index) => (
                    <TripCard key={index} data={trip} />
                ))}
                </div>
        </div>
        <div className="whyUsSection">
            <h2>Why us?</h2>
            <div className="reasons">
                <div className="reason reason5">
                    <div className="image"> <img src={Map} alt="" /></div>
                    <div className="text2"> <span>More than 149 travel titles currently in print</span></div>
                </div>
                <div className="reason reason5">
                    <div className="image"> <img src={Baggage} alt="" /></div>
                    <div className="text2"> <span>Supporting millions of travellers since 1982</span></div>
                </div>
                <div className="reason reason5">
                    <div className="image"> <img src={Person} alt="" /></div>
                    <div className="text2"> <span>Our utstanding customer satisfaction </span></div>
                </div>
            </div>
        </div>
        <Experts/>
        <div className="review">
            <div className="reviewText mobile_text">
                <div className="review1">
                    <div className="comment">
                        <p>“Tiago put together an epic itinerary for me and my friends. He showed us some hidden hiking trails and amazing local food spots. He even met us for a coffee to make sure we had everything we needed.</p>
                        <span>Thanks Tiago!”</span>
                    </div>
                    <div className="testimonial">
                        <p>Charlie, rappelling down a 370-foot waterfall</p>
                    </div>
                    <div className="regionName">
                        <p>The Azores</p>
                    </div>
                </div>
                <div className="reviewMember">
                    <div className="local">
                        <img src={Local} alt="" />
                    </div>
                    <div className="expertName">
                        <p>Trip crafted by</p>
                        <div className="name">
                            <span>Tiago</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect x="11.5" y="2" width="1" height="20" rx="0.5" fill="#C9D2DA"/>
                            </svg>
                            <p>Local expert in Portugal</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="europe">
                <h2>Europe</h2>
                <div className="tripPlans">
                    {tripsData.slice(6, 9).map((trip, index) => (
                    <TripCard key={index} data={trip} />
                ))}
                </div>
        </div>
        <div className="asia">
                <h2>Asia</h2>
                <div className="tripPlans">
                    {tripsData.slice(9, 12).map((trip, index) => (
                    <TripCard key={index} data={trip} />
                ))}
                </div>
        </div>
        <ElseSection/>
        <JoinUs/>
        <ScrollToTopButton/>
        <Footer/>
    </div>
  );
}

export default Homepage;
