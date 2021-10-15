import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../../Store/actions/orderActions';
import AdminDashboard from '../AdminDashboard';
import OrderItem from './OrderItem/OrderItem';
import './Orders.css';
import { io } from 'socket.io-client';
const Orders = () => {
    const dispatch = useDispatch();
    const socket = io('http://localhost:5000');
    const { orders } = useSelector(state => state.order);
    const { user: { _id } } = useSelector(state => state.auth);
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
