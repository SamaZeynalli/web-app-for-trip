import React from "react";
import './blog.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Section from '../../components/elsewheresection/Section';
import JoinUs from '../../components/joinus/JoinUs';
import { Link } from "react-router-dom";
import Trip1 from '../../components/IMG/trip1.png';
import Trip2 from '../../components/IMG/trip2.png';
import Trip3 from '../../components/IMG/trip3.png';
import Trip4 from '../../components/IMG/trip4.png';
import Trip5 from '../../components/IMG/trip5.png';


const BLOG = () => {
    return(
        <div>
            <Header/>
            <div className="video video_blog">
                <div className="texts">
                    <h1>Blog</h1>
                    <p>Blog articles for "Inspiration".</p>
                </div>
            </div>
            <div className="categories">
                <div className="link"><Link to="/articles">All articles</Link></div>
                <div className="link"><Link to="/Food">Food & Drink</Link></div>
                <div className="link"><Link to="/Inspiration">Inspiration</Link></div>
                <div className="link"><Link to="/LocalGuides">Local Guides</Link></div>
                <div className="link"><Link to="/SeeDo">See & Do</Link></div>
                <div className="link"><Link to="/TravelTips">Travel Tips</Link></div>
                <div className="link"><Link to="/Wheretostay">Where to stay</Link></div>
            </div>
            <div className="blogArticlesSection">
                <div className="blogArticles">
                    <div className="attractions">
                            <div className="trip trip1">
                                <img src={Trip1} alt="" />
                                <div className="texts">
                                    <h3>Food & Drink</h3>
                                    <p>Founded by Pope Julius II in the early 16th century and enlarged by successive pontiffs, the Vatican Museums boast one of the world's greatest art…</p>
                                </div>
                            </div>
                            <div className="trip trip2">
                                <img src={Trip2} alt="" />
                                <div className="texts">
                                    <h3>See & Do</h3>
                                    <p>Everyone wants to see the Colosseum, and it doesn’t disappoint, especially if accompanied by tales of armored gladiators and hungry lions. More...</p> 
                                </div>
                            </div>
                            <div className="trip trip3">
                                <img src={Trip3} alt="" />
                                <div className="texts">
                                    <h3>Inspiration</h3>
                                    <p>Founded by Pope Julius II in the early 16th century and enlarged by successive pontiffs, the Vatican Museums boast one of the world's greatest art…</p>
                                </div>
                            </div>
                            <div className="trip trip4">
                                <img src={Trip4} alt="" />
                                <div className="texts">
                                    <h3>Travel Tips</h3>
                                    <p>Everyone wants to see the Colosseum, and it doesn’t disappoint, especially if accompanied by tales of armored gladiators and hungry lions. More...</p>
                                </div>
                            </div>
                            <div className="trip trip5">
                                <img src={Trip5} alt="" />
                                <div className="texts">
                                    <h3>Food & Drink</h3>
                                    <p>In the city of outstanding churches, none can hold a candle to St Peter's, Italy’s largest, richest and most spectacular basilica. Built atop a 4th…</p>
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

export default BLOG;