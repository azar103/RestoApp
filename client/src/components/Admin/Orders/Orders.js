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
    const { user: { _id, name } } = useSelector(state => state.auth);
    const restaurantOrders = orders.filter((order) => order.restaurant.name === name);
    return (
        <AdminDashboard>
        {
                restaurantOrders.length > 0 ?
                <div className="orders_list">
                    {orders.filter((order) => order.restaurant.name === name).map((order) => <OrderItem
                    order={order}
                    />)}                        
                </div>
                    :
                <h3>No Orders Found</h3>
        }    
        </AdminDashboard>
    )
}

export default Orders
