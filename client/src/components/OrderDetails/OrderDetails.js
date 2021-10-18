import React,{useEffect} from 'react'
import './OrderDetails.css';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../Store/actions/orderActions';
import OrderBox from './OrderBox/OrderBox';
import opensocket, { io } from 'socket.io-client';



const OrderDetails = () => {
    const dispatch = useDispatch();
    const socket = io('http://localhost:5000');
    const orders = useSelector(state => state.order.orders);
    const { user } = useSelector(state => state.auth);
    const orderItems = orders && orders.filter((item) => item.user.userId === user._id);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    useEffect(() => {
        dispatch(getOrders());
        socket.on('orders', (data) => {
            if (data === "create") {
                dispatch(getOrders());
            } else if (data === "update") {
                dispatch(getOrders())
            }
        })
    },[])
   
    return (
        
        <main>
            <div className="container">
            <h2>Order History</h2>    
            <div style={{display:'flex', flexWrap:'wrap'}}> 
                    {orderItems.map((order) => <OrderBox
                        order={order}
                        days={days}
                    />)}
            </div>   
            </div>
       </main>     
    )
}

export default OrderDetails
