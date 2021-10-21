import React from 'react'
import { Link } from 'react-router-dom';
import './RestaurantItem.css'
const RestaurantItem = ({item: {imageUrl, name, _id}}) => {
    const API_ENDPOINT = process.env.API_ENDPOINT || 'http://localhost:5000';
    return (
        <div className="restaurant">
            <div className="image">
                   <img src={`${API_ENDPOINT}/${imageUrl.replace('uploads', '')}`} alt="" />
            </div>
            <div className="restaurant_footer">
                <h3>{name}</h3>
                <div className="button_section">
                    <Link className="opacity"
                    to={`/restaurant/${_id}`}
                    >
                    order now
                    </Link>
                </div>
            </div>
  
        </div>
    )
}

export default RestaurantItem
