import React, {useState, useEffect} from 'react'
import './ShoppingCart.css'
import { useSelector, useDispatch } from 'react-redux';
import { getCartItems, getTotalPrice } from '../../Store/actions/cartActions';
import CartItem from '../CartItem/CartItem';
import DeliveryDetails from './DeliveryDetails/DeliveryDetails';
import Checkout from './Checkout/Checkout';
const ShoppingCart = () => {
    const cartItems = useSelector(state => state.cart.cart);
    const user = useSelector(state => state.auth.user);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const [deliveryCharge, setDeliveryCharge] = useState(20);
    const dispatch = useDispatch();
    const [step, setStep] = useState(1);

    useEffect(() => {
        dispatch(getCartItems());
        dispatch(getTotalPrice(user._id));
    },[cartItems,user._id]);
    const nbItems = cartItems.filter((item) => item.userId === user._id).length;
    const items = cartItems.filter((item) => item.userId === user._id);

    const checkout = () => {
        setStep(s => s + 1);
    }
    const backToCheckout = () => {
        setStep(s => s - 1);
    }
    
    return (
        <main>
            <div className="container">    
            <div className="items_cart_container">
                {step === 1 ?
                    <Checkout
                        onCheckout={checkout}
                        items={items}
                        nbItems={nbItems}
                        total={totalPrice}
                        delivery={deliveryCharge}
                    />
                    :
                    <DeliveryDetails
                        onBackToCheckout={backToCheckout}
                        total={totalPrice}
                        delivery={deliveryCharge}
                        items={items}
                    />
                }
                </div>
            </div>   
        </main>
    )
}

export default ShoppingCart
