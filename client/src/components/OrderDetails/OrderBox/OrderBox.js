import React from 'react'
import { editOrder } from '../../../Store/actions/orderActions';
import {useDispatch } from 'react-redux';

const OrderBox = ({ order, days }) => {
    const total = order.items.reduce((accum, val) => accum + parseInt(val.item.price), 20);
    const dispatch = useDispatch();
    return (
        <div className="orderBox">
 
            <div className="description">
                <div className="img_state">
                   {order.status  ==="Placed"&&<span>waiting</span>} 
                    <p>Ordered on-{`${days[new Date(order.createdAt).getDay()]} ${new Date(order.createdAt).getDate()}/${new Date(order.createdAt).getMonth()+1}`}</p>
                </div>
                <div className="description_details">
                    <h3>Order Summary</h3>
                    {order.items&&order.items.map((item) => <div
                        style={{display:'flex', justifyContent:'space-between'}}
                        >
                            <span>{item.item.name}</span>
                            <span>{item.quantity}x{item.item.price/item.quantity}</span>
                        </div>)}
                  <p style={{marginTop:"20px"}}>Total Amount - {total}</p>
                    </div>
                    <div className="line"></div>
                    <p>ordered from-White Palace Grill</p>
                </div>
                <div className="status">
                    {
                        order.status === 'Cancelled' ?
                        <div className="status_color status_color_red"></div>
                            :
                        <div className="status_color status_color_green"></div>    
                    }               
                  <span>{order.status}</span>
                </div>
                {
                order.status === "Placed" &&
                <button className="btn opacity"
                onClick={() => {
                    dispatch(editOrder(order._id, {
                    "status":"Cancelled"
                }))
            }}
                >
                       cancel the order
                    </button>                
                }
                </div>
    )
}

export default OrderBox
