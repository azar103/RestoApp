import React,{useEffect} from 'react'
import './OrderItem.css'
import {useDispatch} from 'react-redux';
import { editOrder } from '../../../../Store/actions/orderActions';
const OrderItem = ({ order: { _id, user, items, createdAt,status } }) => {
    const currentDate = new Date(createdAt);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dispatch = useDispatch();
    const total = items.reduce((accum, val) => accum + parseInt(val.item.price), 20);
    return (
        <div className="order_dashboard_box">
            <p>orderId-#{_id}</p>
            <p>ordered by {user.firstName} {user.lastName}</p>
            <p>Address-{`${user.address.zipCode},${user.address.street},${user.address.locality}`}</p>
            <div className="line"></div>
            <div className="details">
                <h3>Order Summary</h3>
                {items&&items.map((item) => <div
                    style={{display:'flex', justifyContent:'space-between'}}
                    >
                        <span>{item.item.name}</span>
                        <span>{item.quantity}x{item.item.price/item.quantity}</span>
                    </div>)}    
            </div>
            <p
            style={{marginTop:"40px"}}
            >TotalAmount - {total}</p>
            <div className="line"></div>
            <p>Ordered on-{`${days[currentDate.getDay()]} ${currentDate.getDate()}/${currentDate.getMonth()+1}`}</p>
            <div className="status">
                {
                    status === 'Cancelled' ?
                        
                    <div className="status_color status_color_red"></div>
                        :
                     status === 'Accepted' ?   
                            <div className="status_color status_color_green"></div>
                            :
                            <div className="status_color status_color_black"></div>    
                }
                
              <span>{status}</span>
            </div>
            {
                status === 'Accepted' ?
                <div className="footer">    
                <div className="btn btn_orange opacity"
                onClick={() => {
                    dispatch(editOrder(_id, {
                    "status":"Completed"
                }))
            }}
                        >
                            
                  ready for delivery
                        </div>
                    </div>
                    :
                        status === 'Completed' || status === 'Cancelled' ?
                        null
                    :
                    <div className="footer">
                    <div className="btn btn_accept opacity"
                        onClick={() => {
                            dispatch(editOrder(_id, {
                            "status":"Accepted"
                        }))
                    }}
                    >
                      accept order
                    </div>
                    <div className="btn btn_cancel opacity"
                    onClick={() => {
                        dispatch(editOrder(_id, {
                        "status":"Cancelled"
                    }))
                }} 
                    >
                      cancel order
                        </div>
              </div>             
            }
            
           
        </div>
    )
}

export default OrderItem
