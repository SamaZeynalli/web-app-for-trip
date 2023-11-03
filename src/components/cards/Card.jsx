import React from 'react';
import './card.css';
import SaveImg from "../IMG/bookmark.png";

function Card(props) {
    return (
        <div className="card">
            <div className='cardImg'>
                <img src={props.image} alt={props.title} />
                <div className='content'>
                    {props.showLovebutton && (
                        <button className='love'>{props.love}</button>
                    )}
                    
                    {props.showSavebutton && (
                        <button className='save'>
                            <img src={SaveImg} alt="" />
                        </button>
                    )}
                </div>
            </div>
            <div className='text'>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <div className="price">
                    <div className="days">{props.days}</div>
                    <div>
                        <div className='from'>{props.from}</div>
                        <div className="price">{props.price}</div>
                    </div>
                </div>
            </div>
        </div>
    );
    }
    
    export default Card;