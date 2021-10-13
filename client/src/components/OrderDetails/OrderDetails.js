import React,{useEffect} from 'react'
import './OrderDetails.css';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../Store/actions/orderActions';
import OrderBox from './OrderBox/OrderBox';



const OrderDetails = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.order.orders);
    const user = useSelector(state => state.auth.user);
    const orderItems = orders && orders.filter((item) => item.user.userId === user._id);



    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

   
   
    useEffect(() => {
        dispatch(getOrders());
    }, [])
   
    return (
        
        <div style={{ width:'100%', position:"absolute", top:"20%" }}>
            <div className="container">
            <div style={{display:'flex'}}> 
                    {orderItems.map((order) => <OrderBox
                        order={order}
                        days={days}
                    />)}
            </div>   
            </div>
       </div>     
    )
}

export default OrderDetails
