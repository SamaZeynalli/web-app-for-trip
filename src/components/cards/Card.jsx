import React from 'react';
import './card.css';
import SaveImg from "../IMG/bookmark.png";

function Card(props) {
    const cardStyle = {
        backgroundImage: `url(${props.image})`,
    };

    return (
        <div className="card">
            <div className='cardImg' style={cardStyle}>
                <div className='content'>
                    {props.showLovebutton && (
                        <button className='love'>
                            <img src={props.LoveImg} alt="" />
                            <p>{props.love}</p>
                        </button>
                    )}
                    
                    {props.showSavebutton && (
                        <button className='save'>
                            <img src={SaveImg} alt="" />
                        </button>
                    )}
                </div>
            </div>
            <div className='text'>
                <div className='upperText'>
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </div>
                <div className="priceButton">
                    <button>
                        <div className="days">{props.days}</div>
                        <div className='primary'>
                            <div className='from'>{props.from}</div>
                            <div className="price ">{props.price}</div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
    }
    
    export default Card;