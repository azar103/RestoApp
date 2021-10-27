import React, {useEffect, useState} from 'react'

import ListDishes from './ListDishes/ListDishes';
import './Dishes.css';

const Dishes = ({restaurant}) => {


    const [value, setValue] = useState('');
    const onChange = (e) => {
        setValue(e.target.value);
    }

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
                        foods={restaurant.items}
                        value={value}
                        />  
                </div>     
            </div>    
        </div>
    )
}

export default Dishes
