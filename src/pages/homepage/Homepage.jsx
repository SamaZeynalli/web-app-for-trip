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
import Map from '../../components/IMG/Frame1.png';
import Baggage from '../../components/IMG/Frame2.png';
import Person from '../../components/IMG/Frame3.png';
import Callcenter from '../../components/IMG/Callcenter.png';
import Callcenter1 from '../../components/IMG/Callcenter1.png';
import Local from '../../components/IMG/Framelocal.png';
import Right from '../../components/IMG/Chevron_Right.png'

function Homepage() {

    const card1Props = {
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
    }

    const card2Props = {
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
    }

    const card3Props = {
        image: Trend3,
        showLovebutton: false,
        showSavebutton: true,
        SaveImg: Save,
        title: 'TURKEY TRIP',
        description:'International Istanbul',
        days:'7 days',
        from:'from',
        price:'$400.00'
    }

    const card4Props = {
        image: Trend4,
        showLovebutton: false,
        showSavebutton: true,
        SaveImg: Save,
        title: 'SPAIN TRIP',
        description:'Magical Madrid To Marrakech By Train',
        days:'12 days',
        from:'from',
        price:'$1299.00'
    }

    const card5Props = {
        image: Trend5,
        showLovebutton: false,
        showSavebutton: true,
        SaveImg: Save,
        title: 'ITALY TRIP',
        description:'Spectacular Sicily',
        days:'5 days',
        from:'from',
        price:'$250.00'
    }

    const card6Props = {
        image: Trend6,
        showLovebutton: false,
        showSavebutton: true,
        SaveImg: Save,
        title: 'TURKEY TRIP',
        description:'International Istanbul',
        days:'7 days',
        from:'from',
        price:'$400.00'
    }

    const card7Props = {
        image: Trend7,
        showLovebutton: false,
        showSavebutton: true,
        SaveImg: Save,
        title: 'ICELAND TRIP',
        description:'Volcanic Iceland',
        days:'7 days',
        from:'from',
        price:'$2299.00'
    }

    const card8Props = {
        image: Trend8,
        showLovebutton: false,
        showSavebutton: true,
        SaveImg: Save,
        title: 'SCOTLAND TRIP',
        description:'The Scottish Highlands',
        days:'7 days',
        from:'from',
        price:'$1687.00'
    }

    const card9Props = {
        image: Trend9,
        showLovebutton: false,
        showSavebutton: true,
        SaveImg: Save,
        title: 'Atlantic Azores',
        description:'International Istanbul',
        days:'6 days',
        from:'from',
        price:'$1220.00'
    }

    const card10Props = {
        image: Trend11,
        showLovebutton: false,
        showSavebutton: true,
        SaveImg: Save,
        title: 'CHINA TRIP',
        description:'Icons Of China',
        days:'5 days',
        from:'from',
        price:'$1399.00'
    }

    const card11Props = {
        image: Trend10,
        showLovebutton: false,
        showSavebutton: true,
        SaveImg: Save,
        title: 'THAILAND TRIP',
        description:'Cambodia & Vietnam',
        days:'7 days',
        from:'from',
        price:'$2350.00'
    }

    const card12Props = {
        image: Trend12,
        showLovebutton: false,
        showSavebutton: true,
        SaveImg: Save,
        title: 'TAIWAN TRIP',
        description:'A Taste Of Taiwan',
        days:'7 days',
        from:'from',
        price:'$1900.00'
    }


    return (
      <div>
        <Header/>
        <div className="trips">
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
        <div className="trendingSection">
            <div className="trendingNow">
                <h2>Trending now</h2>
                <div className="tripPlans">
                    <Card {...card1Props}/>
                    <Card {...card2Props} />
                    <Card {...card3Props} />
                </div>
            </div>
        </div>
        <div className="brand">
            <div className="brandNew">
                <h2>Brand new trips</h2>
                <div className="tripPlans">
                    <Card {...card4Props}/>
                    <Card {...card5Props} />
                    <Card {...card6Props} />
                </div>
            </div>
        </div>
        <div className="whyUsSection">
        <div className="whyUs">
            <h2>Our Local Experts</h2>
            <div className="reasons">
                <div className="reason">
                    <div className="image"> <img src={Map} alt="" /></div>
                    <div className="text2">More than 149 travel titles currently in print</div>
                </div>
                <div className="reason">
                    <div className="image"> <img src={Baggage} alt="" /></div>
                    <div className="text2">Supporting millions of travellers since 1982</div>
                </div>
                <div className="reason">
                    <div className="image"> <img src={Person} alt="" /></div>
                    <div className="text2">Our utstanding customer satisfaction</div>
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
                    <Card {...card7Props}/>
                    <Card {...card8Props} />
                    <Card {...card9Props} />
                </div>
            </div>
        </div>
        <div className="asia">
            <div className="asia_main">
                <h2>Asia</h2>
                <div className="tripPlans">
                    <Card {...card10Props}/>
                    <Card {...card11Props} />
                    <Card {...card12Props} />
                </div>
            </div>
        </div>
        <div className="section">
            <div className="body">
                <p>Looking to go elsewhere?</p>
                <button>
                    <span>Our destinations</span>
                    <img src={Right} alt="" />
                </button>
            </div>
        </div>
        <div className="joinUs">
            <div className="joinBody">
                <div className="joinText">
                    <span>Join our travel revolution</span>
                    <p>Sign up to stay in the know - hot new travel spots, how we strive to make the world a better place, and all sorts of surprises.</p>
                </div>
                <div className="inputButton">
                    <input type="text" placeholder="Email"/>
                    <button>Sign up</button>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  );
}

export default Homepage;
