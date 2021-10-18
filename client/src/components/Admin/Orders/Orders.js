import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../../Store/actions/orderActions';
import AdminDashboard from '../AdminDashboard';
import OrderItem from './OrderItem/OrderItem';
import './Orders.css';
import { io } from 'socket.io-client';
const Orders = () => {
    const dispatch = useDispatch();
    const { orders } = useSelector(state => state.order);
    const { user: { _id } } = useSelector(state => state.auth);
    console.log(orders);
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
