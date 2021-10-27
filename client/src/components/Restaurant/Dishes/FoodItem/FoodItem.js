import React from 'react';
import './FoodItem.css';
import { useSelector } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { addItemToCart, deleteAll, deleteItems } from '../../../../Store/actions/cartActions';
import Swal from 'sweetalert2';
const FoodItem = ({ item }) => {
    const API_ENDPOINT = process.env.API_ENDPOINT || 'http://localhost:5000';
    const isAuth = useSelector(state => state.auth.isAuth);
    const { user } = useSelector(state => state.auth);
    const { restaurant } = useSelector(state => state.restaurant);
    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();
    const cartItems = useSelector(state => state.cart.cart);
    const index = cartItems.map((item) => item.restaurantId).indexOf(id);
    const addToCart = () => {
        const itemCart = {
            userId: user._id,
            restaurantId: id,
            item,
        }
        
        
        if (user._id) {
        
            dispatch(addItemToCart(itemCart));
            if (cartItems.length > 0 && index == -1) {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                        dispatch(deleteAll(user._id));
                    }
                  })
               
            }
      }   

    }
    return (
        <div className="food_box">
            <div className="content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="btn-price">
                    <span className="price">${item.price}</span>
                        <Link
                        to={`/restaurant/${id}`}
                            className="btn opacity"
                            onClick={addToCart}
                        >add to cart</Link>    
                </div>    
            </div>
            <div className="image">
            <img src={`${API_ENDPOINT}/${item.urlImg.replace('uploads', '')}`} alt="" />
        </div>
        </div>
    )
}

export default FoodItem
