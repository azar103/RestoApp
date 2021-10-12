import React,{useEffect} from 'react'
import './OrderDetails.css';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../Store/actions/orderActions';



const OrderDetails = () => {
    const dispatch = useDispatch();
    const order = useSelector(state => state.order.orders);
    const orderItems = order[0].items;

    const API_ENDPOINT = process.env.API_ENDPOINT || 'http://localhost:5000';
    useEffect(() => {
        dispatch(getOrders());
    }, [])
    console.log(orderItems);
    return (
        <div className="orderBox">
            <div className="description">
                <div className="img_state">
                     <span>waiting</span>
                </div>
                <div className="description_details">
                    <h3>Order Summary</h3>
                    {orderItems.map((item) => <div
                    style={{display:'flex', justifyContent:'space-between'}}
                    >
                        <span>{item.item.name}</span>
                        <span>{item.quantity}x{item.item.price/item.quantity}</span>
                    </div>)}
                </div>
            </div>
            <button className="btn opacity">
                cancel the order
            </button>

        </div>
    )
}

export default OrderDetails
