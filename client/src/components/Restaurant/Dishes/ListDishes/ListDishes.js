import React from 'react'
import FoodItem from '../FoodItem/FoodItem';
import './ListDishes.css';
const ListDishes = ({ foods, value }) => {
    return (
        <div className="dishes_container">
            {foods && foods.filter((item) => item.name.toLowerCase().indexOf(value.toLowerCase())!== -1).map((item) => (<FoodItem
            item={item}
            />))}
            </div>   
    )
}

export default ListDishes
