import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import './index.css';
import { Link } from 'react-router-dom';
import Local from '../../components/IMG/Framelocal.png';
import JoinUs from "../../components/joinus/JoinUs";
import { TripCard, tripsData } from "../../components/tripcard/Tripcard";

const Country = () => {


        return(
                <div>
                <Header/>
                <div className="picture3">
                        <div className="texts">
                                <h1>Explore places on Tourista</h1>
                                <p>Destinations</p>
                        </div>
                </div>
                <div className="destination_section">
                                <div className="dest_cntry">
                                        <h3>Europe</h3>
                                        <ul className="links">
                                                <li><Link to="/Destinations/Azores">Azores</Link></li>
                                                <li><Link to="/Destinations/Croatia">Croatia</Link></li>
                                                <li><Link to="/Destinations/Georgia">Georgia</Link></li>
                                                <li><Link to="/Destinations/Germany">Germany</Link></li>
                                                <li><Link to="/Destinations/Greece">Greece</Link></li>
                                                <li><Link to="/Destinations/Iceland">Iceland</Link></li>
                                                <li><Link to="/Destinations/Ireland">Ireland</Link></li>
                                                <li><Link to="/Destinations/Italy">Italy</Link></li>
                                                <li><Link to="/Destinations/Portugal">Portugal</Link></li>
                                                <li><Link to="/Destinations/Scotland">Scotland</Link></li>
                                                <li><Link to="/Destinations/Spain">Spain</Link></li>
                                                <li><Link to="/Destinations/UnitedKingdom">United Kingdom</Link></li>
                                        </ul>
                                </div>
                                <div className="dest_cntry">
                                        <h3>Asia</h3>
                                        <ul className="links">
                                                <li><Link to="/Destinations/Cambodia">Cambodia</Link></li>
                                                <li><Link to="/Destinations/China">China</Link></li>
                                                <li><Link to="/Destinations/India">India</Link></li>
                                                <li><Link to="/Destinations/Indonesia">Indonesia</Link></li>
                                                <li><Link to="/Destinations/Japan">Japan</Link></li>
                                                <li><Link to="/Destinations/Jordan">Jordan</Link></li>
                                                <li><Link to="/Destinations/SouthKorea">South Korea</Link></li>
                                                <li><Link to="/Destinations/Sri Lanka">Sri Lanka</Link></li>
                                                <li><Link to="/Destinations/Taiwan">Taiwan</Link></li>
                                                <li><Link to="/Destinations/Thailand">Thailand</Link></li>
                                                <li><Link to="/Destinations/Turkey">Turkey</Link></li>
                                                <li><Link to="/Destinations/Vietnam">Vietnam</Link></li>
                                        </ul>
                                </div>
                                <div className="dest_cntry">
                                        <h3>Africa</h3>
                                        <ul className="links">
                                                <li><Link to="/Destinations/Egypt">Egypt</Link></li>
                                                <li><Link to="/Destinations/Ethiopia">Ethiopia</Link></li>
                                                <li><Link to="/Destinations/Kenya">Kenya</Link></li>
                                                <li><Link to="/Destinations/Ghana">Ghana</Link></li>
                                                <li><Link to="/Destinations/Madagascar">Madagascar</Link></li>
                                                <li><Link to="/Destinations/Mauritius">Mauritius</Link></li>
                                                <li><Link to="/Destinations/Morocco">Morocco</Link></li>
                                                <li><Link to="/Destinations/Namibia">Namibia</Link></li>
                                                <li><Link to="/Destinations/Rwanda">Rwanda</Link></li>
                                                <li><Link to="/Destinations/SouthAfrica">South Africa</Link></li>
                                                <li><Link to="/Destinations/Uganda">Uganda</Link></li>
                                                <li><Link to="/Destinations/Tanzania&Zanzibar">Tanzania & Zanzibar</Link></li>
                                        </ul>
                                </div>
                                <div className="dest_cntry">
                                        <h3>C/America</h3>
                                        <ul className="links">
                                                <li><Link to="/Destinations/Belize">Belize</Link></li>
                                                <li><Link to="/Destinations/Costa Rica">Costa Rica</Link></li>
                                                <li><Link to="/Destinations/Cuba">Cuba</Link></li>
                                                <li><Link to="/Destinations/Dominican Republic">Dominican Republic</Link></li>
                                                <li><Link to="/Destinations/Guatemala">Guatemala</Link></li>
                                                <li><Link to="/Destinations/Honduras">Honduras</Link></li>
                                                <li><Link to="/Destinations/Jamaica">Jamaica</Link></li>
                                                <li><Link to="/Destinations/Nicaragua">Nicaragua</Link></li>
                                                <li><Link to="/Destinations/Mexico">Mexico</Link></li>
                                                <li><Link to="/Destinations/Panama">Panama</Link></li>
                                                <li><Link to="/Destinations/PuertoRico">Puerto Rico</Link></li>
                                                <li><Link to="/Destinations/TrinidadandTobago">Trinidad and Tobago</Link></li>
                                        </ul>
                                </div>
                                <div className="dest_cntry">
                                        <h3>S/America</h3>
                                        <ul className="links">
                                                <li><Link to="/Destinations/Argentina">Argentina</Link></li>
                                                <li><Link to="/Destinations/Bolivia">Bolivia</Link></li>
                                                <li><Link to="/Destinations/Brazil">Brazil</Link></li>
                                                <li><Link to="/Destinations/Chile">Chile</Link></li>
                                                <li><Link to="/Destinations/Colombia">Colombia</Link></li>
                                                <li><Link to="/Destinations/Ecuador">Ecuador</Link></li>
                                                <li><Link to="/Destinations/Peru">Peru</Link></li>
                                        </ul>
                                </div>

                </div>
                <div className="brand">
                                <h2>Top Destinations</h2>
                                <div className="tripPlans">
                                        {tripsData.slice(12, 15).map((trip, index) => (
                                        <TripCard key={index} data={trip} />
                                        ))}
                                </div>
                                <div className="tripPlans">
                                        {tripsData.slice(15, 18).map((trip, index) => (
                                        <TripCard key={index} data={trip} />
                                        ))}
                                </div>
                </div>
                <div className="review">
                        <div className="reviewText">
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
                <JoinUs/>
                <Footer/>
                </div>
            )
}

export default Country;