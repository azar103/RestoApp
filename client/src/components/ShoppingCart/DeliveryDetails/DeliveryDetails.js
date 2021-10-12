import React, {useState, useEffect} from 'react'
import './DeliveryDetails.css'
import { useDispatch, useSelector } from 'react-redux';
import { saveOrder } from '../../../Store/actions/orderActions';
import { deleteItems } from '../../../Store/actions/cartActions';
import swal from 'sweetalert';
import { clearErrors } from '../../../Store/actions/errorActions';
import { useHistory} from 'react-router-dom';
const DeliveryDetails = ({ onBackToCheckout, total, delivery, items }) => {

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cart);
    const user = useSelector(state => state.auth.user);

    const [formData, setFormData] = useState({
        locality: '',
        street: '',
        zipCode: '',
        phoneNumber:''
    });
    const length = cartItems.filter((cart) => cart.userId === user._id).length;
    const [disabled, setDisabled] = useState(false);
    const error = useSelector(state => state.error);
    const [msg, setMsg] = useState(null);
    const history = useHistory();
    console.log(msg);
    useEffect(() => {
        if (error.id === 'POST_ORDER_FAILED') {
            setMsg(error.msg.msg)
        } else {
            setMsg(null);
        }
        console.log(msg);
    }, [error.msg]);
 
    const getTotalPriceWithDelivery = () => {
        return total + delivery;
    }

    const getPrice = (price, quantity) => {
        return price / quantity;
    }

    const getAdressObj = () => {
        return {
            locality: formData.locality,
            street: formData.street,
            zipCode: formData.zipCode,
            phoneNumber: formData.phoneNumber
        }
    }

    
    const onPlaceOrder = () => {
        const items = cartItems.filter((cart) => cart.userId === user._id).map((cartItem, index) => ({
            item: cartItem.item,
            quantity: cartItem.quantity
        }));
            const address = getAdressObj();
        const order = {
            items,
            status: "Placed",
            user: {
                email: user.account.email,
                firstName: user.firstName,
                lastName: user.lastName,
                userId: user._id,
                address
            }
        }

            dispatch(saveOrder(order));
            dispatch(deleteItems(user._id));
           
        setFormData({
            ...formData,
            locality: '',
            street: '',
            zipCode: '',
            phoneNumber:''
        })
        history.push('/orderDetails');
    }
    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        dispatch(clearErrors())
    }
    return (
        <>
        <div className="box_header">
            <h2>Delivery Details</h2>
            <i className="fa fa-arrow-left"
             onClick={onBackToCheckout}    
            ></i>
        </div>
        <div className="box">
            <div className="address_container">
                <h4>Address:</h4>
                <form className="address_form">
                        <input type="text"
                            className="address_form_input"
                            placeholder="Locality*"
                            name="locality"
                            value={formData.locality}
                            onChange={onChange}    
                        />
                        <input type="text" className="address_form_input" placeholder="Street*"
                            name="street"
                            value={formData.street}
                            onChange={onChange}
                        />
                        <input type="text"
                            className="address_form_input"
                            placeholder="Zip Code*"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={onChange}
                        />
                        <input type="text"
                            className="address_form_input"
                            placeholder="Phone Number*"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={onChange}
                        />
                </form>
            </div>
            <div className="total_box">
                    <h3>Order Summary</h3>
                    <div className="summary_container">
                        {items.map((cartItem) => <div className="row">
                            <span>{cartItem.item.name}</span>
                            <span>{cartItem.quantity} x {getPrice(cartItem.item.price,cartItem.quantity)}</span>
                        </div>)}
                    </div>
                    <div className="line"></div>      
                <div className="grand_total">
                    <h3>Grand Total</h3>    
                    <span>
                     { length===0 ? `$20` :  `$${getTotalPriceWithDelivery()}`}
                    </span>
                </div>
                    <button
                        className="cart_btn opacity"
                        onClick={onPlaceOrder}
                        disabled={length!==0&&msg===null? false : true}
                >
                     place order
                </button>
            </div>
        </div>    
        </>    
    )
}

export default DeliveryDetails
