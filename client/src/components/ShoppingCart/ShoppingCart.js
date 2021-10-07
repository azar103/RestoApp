import React, {useEffect} from 'react'
import './ShoppingCart.css'
import { useSelector, useDispatch } from 'react-redux';
import { getCartItems } from '../../Store/actions/cartActions';
import CartItem from '../CartItem/CartItem';
const ShoppingCart = () => {
    const cartItems = useSelector(state => state.cart.cart);
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCartItems());
    }, []);
    const nbItems = cartItems.filter((item) => item.userId === user._id).length;
    const items = cartItems.filter((item) => item.userId === user._id);
    return (
        <div className="items_cart_container">
            <h2>Cart ({nbItems} Items)</h2>
            <div className="box">
                <div className="items_cart">
                    {items.map((item) => <CartItem
                     item={item}
                    />)}
                </div>
                <div className="total_box">
                    total_box
                </div>
            </div>    
        </div>
    )
}

export default ShoppingCart
