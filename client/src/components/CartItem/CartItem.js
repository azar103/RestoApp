import React from 'react'
import './CartItem.css'
const CartItem = ({ item }) => {
    const API_ENDPOINT = process.env.API_ENDPOINT || 'http://localhost:5000';
    return (
        <div className="cart_item">
            <div className="cart_item_image">
                <img src={`${API_ENDPOINT}/${item.urlImg.replace('uploads', '')}`} alt=""/>
            </div>
            <div className="content">
                {item.name}
            </div>
        </div>
    )
}

export default CartItem
