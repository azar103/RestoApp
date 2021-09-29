import React from 'react'
import Loading from '../Loading/Loading';
import './AdminDashboard.css';
import {useSelector} from 'react-redux';
const AdminDashboard = ({ children }) => {
    const loading = useSelector(state => state.auth.isLoading);
    if (loading) {
        return <Loading />
    }
    return (
        <div className="dashboard">
           <div className="container">
                {children}
           </div>
        </div>
    )
}

export default AdminDashboard
