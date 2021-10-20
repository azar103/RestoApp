import React from 'react';
import './FoodItem.css';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { addItemToCart } from '../../../../Store/actions/cartActions';

const FoodItem = ({ item }) => {
    const API_ENDPOINT = process.env.API_ENDPOINT || 'http://localhost:5000';
    const isAuth = useSelector(state => state.auth.isAuth);
    const user = useSelector(state => state.auth.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const newItem = {}
    const addToCart = () => {
        const itemCart = {
            userId: user._id,
            item,
        }
        if (user._id) {
            dispatch(addItemToCart(itemCart))
      }   

   
    }
    return (
        <div className="food_box">
            <div className="content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="btn-price">
                    <span className="price">${item.price}</span>
                    {
                        !isAuth
                        ?
                      <Link
                        to="/login"
                        className="btn opacity"
                            >add to cart</Link>
                            :
                        <Link
                            to="/restaurant"
                            className="btn opacity"
                            onClick={addToCart}
                        >add to cart</Link>    
                    }
                    
                </div>    
            </div>
            <div className="image">
            <img src={`${API_ENDPOINT}/${item.urlImg.replace('uploads', '')}`} alt="" />
        </div>
        </div>
    )
}

export default FoodItem
