import React from 'react'
import './FoodItem.css';
const FoodItem = ({ item }) => {
    const API_ENDPOINT = process.env.API_ENDPOINT || 'http://localhost:5000';
    return (
        <div className="food_box">
            <div className="image">
                <img src={`${API_ENDPOINT}/${item.urlImg.replace('uploads', '')}`} alt="" />
                <a href="#" className="fas fa-heart"></a>
            </div>
            <div className="content">
                <h3>{item.name}</h3>
                <div className="btn-price">
                 <a href="#" className="btn opacity">add to cart</a>
                    <span className="price">${item.price}</span>
                </div>    
            </div>
        </div>
    )
}

export default FoodItem
