import React from 'react'
import { useSelector } from 'react-redux';
import ListDishes from './ListDishes/ListDishes';
import './Dishes.css';
const Dishes = () => {
    const foods = useSelector(state => state.foods.foods);
    return (
        <div className="dishes">
            <div className="dishes-header">
                <div className="container">
                    <span>Our Dishes</span>
                    <h2>popluar dishes</h2>
                    <ListDishes
                    foods={foods}
                        />  
                </div>     
            </div>    
        </div>
    )
}

export default Dishes
