import React from 'react'
import './FoodItem.css';
import { Link } from 'react-router-dom';
const FoodItem = ({ item }) => {

    return (
        <div className="food_box">
            <Link to="/"><i className="fas fa-heart icon"/></Link>
            <img src={item.url}/>
            <h3>{item.name}</h3>
            <div className="stars">
                <i className="fas fa-star" style={{color:"#353951"}}></i>
                <i className="fas fa-star" style={{color:"#353951"}}></i>
                <i className="fas fa-star" style={{color:"#353951"}}></i>
                <i className="fas fa-star" style={{color:"#353951"}}></i>
                <i className="fas fa-star-half-alt" style={{color:"#353951"}}></i>
             </div>
            <div className="footer">
                <span>${item.price}</span>
                <button className="opacity">add to cart</button>
            </div>
        </div>
    )
}

export default FoodItem