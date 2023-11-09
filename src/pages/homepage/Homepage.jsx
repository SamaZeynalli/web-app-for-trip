import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import './homepage.css';
import Search  from "../../components/IMG/Search_Magnifying_Glass.png";
import Card from "../../components/cards/Card";
import Trend1 from '../../components/IMG/trend1.png';
import Trend2 from '../../components/IMG/trend2.png';
import Trend3 from '../../components/IMG/trend3.png';
import Trend4 from '../../components/IMG/Trend4.png';
import Trend5 from '../../components/IMG/Trend5.png';
import Trend6 from '../../components/IMG/Trend6.png';
import Trend7 from '../../components/IMG/trend7.png';
import Trend8 from '../../components/IMG/trend8.png';
import Trend9 from '../../components/IMG/trend9.png';
import Trend10 from '../../components/IMG/trend10.png';
import Trend11 from '../../components/IMG/trend11.png';
import Trend12 from '../../components/IMG/trend12.png';
import Save from '../../components/IMG/save.png';
import LoveImg1 from '../../components/IMG/LoveImg.png';
import LoveImg2 from '../../components/IMG/loveImg2.png';
import BackImg from '../../components/IMG/review.png';
import Map from '../../components/IMG/Frame1.png';
import Baggage from '../../components/IMG/Frame2.png';
import Person from '../../components/IMG/Frame3.png';
import Callcenter from '../../components/IMG/Callcenter.png';
import Callcenter1 from '../../components/IMG/Callcenter1.png';
import Local from '../../components/IMG/Framelocal.png';
import UpTo from '../../components/IMG/Arrow_Up_SM.png'
import JoinUs from "../../components/joinus/JoinUs";
import Section from "../../components/elsewheresection/Section";


const TripCard = ({ data }) => {
    const { image, showLovebutton, LoveImg, love, showSavebutton, SaveImg, title, description, days, from, price } = data;

    return (
        <Card
          image={image}
          showLovebutton={showLovebutton}
          LoveImg={LoveImg}
          love={love}
          showSavebutton={showSavebutton}
          SaveImg={SaveImg}
          title={title}
          description={description}
          days={days}
          from={from}
          price={price}
        />
      );
    };


function Homepage() {

    const divStyle = {
        backgroundImage: `url(${BackImg})`
      };
    const tripsData = [
        {
            image: Trend1,
            showLovebutton: true,
            LoveImg: LoveImg1,
            love: 'Loved by over 40s' ,
            showSavebutton: true,
            SaveImg: Save,
            title: 'SPAIN TRIP',
            description:'Magical Madrid To Marrakech By Train',
            days:'12 days',
            from:'from',
            price:'$1299.00'
        },
        {
            image: Trend2,
            showLovebutton: true,
            LoveImg: LoveImg2,
            love: 'Loved by couples' ,
            showSavebutton: true,
            SaveImg: Save,
            title: 'ITALY TRIP',
            description:'Spectacular Sicily',
            days:'5 days',
            from:'from',
            price:'$250.00'
        },

        {
            image: Trend3,
            showLovebutton: false,
            showSavebutton: true,
            SaveImg: Save,
            title: 'TURKEY TRIP',
            description:'International Istanbul',
            days:'7 days',
            from:'from',
            price:'$400.00'
        },

        {
            image: Trend4,
            showLovebutton: false,
            showSavebutton: true,
            SaveImg: Save,
            title: 'SPAIN TRIP',
            description:'Magical Madrid To Marrakech By Train',
            days:'12 days',
            from:'from',
            price:'$1299.00'
        },

        {
            image: Trend5,
            showLovebutton: false,
            showSavebutton: true,
            SaveImg: Save,
            title: 'ITALY TRIP',
            description:'Spectacular Sicily',
            days:'5 days',
            from:'from',
            price:'$250.00'
        },

        {
            image: Trend6,
            showLovebutton: false,
            showSavebutton: true,
            SaveImg: Save,
            title: 'TURKEY TRIP',
            description:'International Istanbul',
            days:'7 days',
            from:'from',
            price:'$400.00'
        },

        {
            image: Trend7,
            showLovebutton: false,
            showSavebutton: true,
            SaveImg: Save,
            title: 'ICELAND TRIP',
            description:'Volcanic Iceland',
            days:'7 days',
            from:'from',
            price:'$2299.00'
        },

        {
            image: Trend8,
            showLovebutton: false,
            showSavebutton: true,
            SaveImg: Save,
            title: 'SCOTLAND TRIP',
            description:'The Scottish Highlands',
            days:'7 days',
            from:'from',
            price:'$1687.00'
        },

        {
            image: Trend9,
            showLovebutton: false,
            showSavebutton: true,
            SaveImg: Save,
            title: 'Atlantic Azores',
            description:'International Istanbul',
            days:'6 days',
            from:'from',
            price:'$1220.00'
        },

        {
            image: Trend10,
            showLovebutton: false,
            showSavebutton: true,
            SaveImg: Save,
            title: 'CHINA TRIP',
            description:'Icons Of China',
            days:'5 days',
            from:'from',
            price:'$1399.00'
        },

        {
            image: Trend11,
            showLovebutton: false,
            showSavebutton: true,
            SaveImg: Save,
            title: 'THAILAND TRIP',
            description:'Cambodia & Vietnam',
            days:'7 days',
            from:'from',
            price:'$2350.00'
        },

        {
            image: Trend12,
            showLovebutton: false,
            showSavebutton: true,
            SaveImg: Save,
            title: 'TAIWAN TRIP',
            description:'A Taste Of Taiwan',
            days:'7 days',
            from:'from',
            price:'$1900.00'
        },
    ];




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
            <div className="brandNew">
                <h2>Brand new trips</h2>
                <div className="tripPlans">
                    {tripsData.slice(3, 6).map((trip, index) => (
                    <TripCard key={index} data={trip} />
                ))}
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
        <div className="review" style={divStyle}>
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
        <div className="europe">
            <div className="europe_main">
                <h2>Europe</h2>
                <div className="tripPlans">
                    {tripsData.slice(6, 9).map((trip, index) => (
                    <TripCard key={index} data={trip} />
                ))}
                </div>
            </div>
        </div>
        <div className="asia">
            <div className="asia_main">
                <h2>Asia</h2>
                <div className="tripPlans">
                    {tripsData.slice(9, 12).map((trip, index) => (
                    <TripCard key={index} data={trip} />
                ))}
                </div>
            </div>
        </div>
        <Section/>
        <JoinUs/>
        <div className="upTo">
            <button>
                <img src={UpTo} alt="" />
            </button>
        </div>
        <Footer/>
    </div>
  );
}

export default Homepage;
