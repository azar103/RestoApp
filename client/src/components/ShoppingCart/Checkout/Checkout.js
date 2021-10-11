import React, {useEffect} from 'react'
import CartItem from '../../CartItem/CartItem';
import './Checkout.css';
import {useDispatch, useSelector} from 'react-redux';
import { getCartItems } from '../../../Store/actions/cartActions';
const Checkout = ({ onCheckout, items, nbItems, total, delivery }) => {
    const dispatch = useDispatch();
  
    const getTotalPriceWithDelivery = () => {
        return total + delivery;
    }

    
    return (
        <>
        <h2>Cart ({nbItems} Items)</h2>
        <div className="box">
            <div className="items_cart">
                {items.map((item, index) => <CartItem
                 key={index}   
                 item={item}
                />)}
            </div>
            <div className="total_box">
                <h3>Total Amount</h3>
                <div className="initial_amount">
                    <span>initial amount</span>
                    <span>${total}</span>
                </div>
                <div className="delivery_charge">
                    <span>delievery charge</span>
                    <span>${delivery}</span>
                </div>
                <div className="line">
                </div>
                <div className="grand_total">
                    <h3>Grand Total</h3>
                    <span>
                      ${getTotalPriceWithDelivery()}
                    </span>
                </div>
                    <button
                        className="cart_btn opacity"
                        onClick={onCheckout}
                >
                     checkout
                </button>
            </div>
        </div>    
        </>
    )
}

export default Checkout
