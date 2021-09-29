import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ListDishes from './ListDishes/ListDishes';
import './Dishes.css';
import { getAllFoods } from '../../../Store/actions/foodActions';

const Dishes = () => {
    const foods = useSelector(state => state.foods.foods);
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(getAllFoods())
   }, [])
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
