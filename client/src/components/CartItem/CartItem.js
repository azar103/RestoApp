import React, {useState, useEffect} from 'react'
import './CartItem.css'
import {useDispatch} from 'react-redux';
import { editPriceAndQuantity, removeItemFromCart } from '../../Store/actions/cartActions';
const CartItem = ({ item:{item, quantity,_id} }) => {
    const API_ENDPOINT = process.env.API_ENDPOINT || 'http://localhost:5000';
    const dispatch = useDispatch();
    const [itemQuantity, setItemQuantity] = useState(quantity);
    const [itemPrice, setItemPrice] = useState(item.price/itemQuantity);

    const addQuantity = () => {
            setItemQuantity(prevCount => prevCount + 1);
                const obj = {
                    item: {
                    price: itemPrice*(itemQuantity+1)
                    },
                    quantity: itemQuantity+1
                }     
            dispatch(editPriceAndQuantity(_id, obj));    
    }
    const reduceQuantity = () => {

            setItemQuantity(prevCount => prevCount - 1);
    
           const obj = {
              item: {
              price: itemPrice*(itemQuantity-1)
             },
               quantity: itemQuantity - 1
          }
          dispatch(editPriceAndQuantity(_id, obj));
    
        
    }
    return (
        <div className="cart_item"
        >
            <div className="cart_item_image">
        <img src={`${API_ENDPOINT}/${item.urlImg.replace('uploads', '')}`} alt=""/>
    </div>
            <div className="content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span>${item.price}</span>
                <div className="btn_container">
                    <button className="btn_add_minus"
                        onClick={addQuantity}
                        disabled={_id ? false: true}
                    >+</button>
                    <span>{quantity}</span>
                    <button className="btn_add_minus"
                    disabled={ _id ?false : true}    
                    onClick={reduceQuantity}
                    >-</button>
                </div>
            </div>
            <div>
                <i className="fa fa-trash opacity"
                    onClick={() => {
                        dispatch(removeItemFromCart(_id));
                }}
                ></i>
            </div>    
        </div>
    )
}

export default CartItem
