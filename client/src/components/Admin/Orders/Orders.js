import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../../Store/actions/orderActions';
import AdminDashboard from '../AdminDashboard';
import OrderItem from './OrderItem/OrderItem';
import './Orders.css';
const Orders = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.order.orders);
    useEffect(() => {
        dispatch(getOrders());
    },[])
    return (
        <AdminDashboard>
        <div className="orders_list">
                {orders.map((order) => <OrderItem
                   order={order}
                />)}
        </div>
        </AdminDashboard>
    )
}

export default Orders
