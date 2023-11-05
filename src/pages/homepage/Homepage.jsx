import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Secondaryheader from "../../components/secondaryheader/Secondaryheader";
import './homepage.css';
import Search  from "../../components/IMG/Search_Magnifying_Glass.png";
import Card from "../../components/cards/Card";
import Trend1 from '../../components/IMG/trend1.png';
import Save from '../../components/IMG/save.png';
import LoveImg1 from '../../components/IMG/LoveImg.png';

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
    return (
      <div>
        <Header/>
        <Secondaryheader/>
        <div className="trips">
            <div className="text">
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
                <h1>Trending now</h1>
                <div className="tripPlans">
                    <Card {...card1Props} />
                    <Card {...card1Props} />
                    <Card {...card1Props} />
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  );
}

export default Homepage;
