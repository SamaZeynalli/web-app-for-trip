import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Secondaryheader from "../../components/secondaryheader/Secondaryheader";
import './homepage.css';
import Search  from "../../components/IMG/Search_Magnifying_Glass.png";

function Homepage() {
    return (
      <div>
        <Header/>
        <Secondaryheader/>
        <div className="trips">
            <h1>We create trips you love</h1>
            <p>Trips you couldn't plan, even if you wanted to.</p>
            <div className="search">
                <input type="text" placeholder="Where do you want to go?"/>
                <button><img src={Search} alt="" /></button>
            </div>
        </div>
        <Footer/>
    </div>
  );
}

export default Homepage;
