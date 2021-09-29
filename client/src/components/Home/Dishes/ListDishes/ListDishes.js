import React from 'react'
import FoodItem from '../FoodItem/FoodItem';
import './ListDishes.css';
const ListDishes = ({ foods }) => {
    return (
        <div className="dishes_container">
            {foods && foods.map((item) => (<FoodItem
            item={item}
            />))}
            </div>   
    )
}

export default ListDishes
