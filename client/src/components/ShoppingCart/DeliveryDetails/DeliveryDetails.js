import React, {useState} from 'react'
import './DeliveryDetails.css'
import { useDispatch } from 'react-redux';
const DeliveryDetails = ({ onBackToCheckout, total, delivery, items }) => {

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        loaclity: '',
        street: '',
        zipCode: '',
        phoneNumber:''
    });
     
    const getTotalPriceWithDelivery = () => {
        return total + delivery;
    }

    const getPrice = (price, quantity) => {
        return price / quantity;
    }

    const getAdressObj = (locality, street, zipCode, phoneNumber) => {
        return {
            locality,
            street,
            zipCode,
            phoneNumber
        }
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
                    <input type="text" className="address_form_input" placeholder="Locality*" />
                    <input type="text" className="address_form_input" placeholder="Street*" />
                    <input type="text" className="address_form_input" placeholder="Zip Code*" />
                    <input type="text" className="address_form_input" placeholder="Phone Number*" />    
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
                      ${getTotalPriceWithDelivery()}
                    </span>
                </div>
                    <button
                        className="cart_btn opacity"
                >
                     place order
                </button>
            </div>
        </div>    
        </>    
    )
}

export default DeliveryDetails
