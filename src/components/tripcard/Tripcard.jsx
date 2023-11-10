import React from 'react';
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

export { TripCard, tripsData };
