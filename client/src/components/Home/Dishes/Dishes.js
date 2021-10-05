import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ListDishes from './ListDishes/ListDishes';
import './Dishes.css';
import { getAllFoods } from '../../../Store/actions/foodActions';

const Dishes = () => {
    const foods = useSelector(state => state.foods.foods);
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const onChange = (e) => {
        setValue(e.target.value);
    }
    useEffect(() => {
       dispatch(getAllFoods())
   }, [])
    return (
        <div className="dishes">
            <div className="dishes-header">
                <div className="container">
                    <header>
                        <h2 className="dishes-list-title">Picked For you</h2>
                        <input type="search" className="search" placeholder="search items"
                            onChange={onChange}
                            value={value}
                        />
                    </header>    
                    <ListDishes
                        foods={foods}
                        value={value}
                        />  
                </div>     
            </div>    
        </div>
    )
}

export default Dishes
