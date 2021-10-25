import React,{useEffect} from 'react'
import Loading from '../Loading/Loading';
import './AdminDashboard.css';
import {useSelector, useDispatch} from 'react-redux';
import { getCurrentUser } from '../../Store/actions/authActions';
const AdminDashboard = ({ children }) => {

    return (
        <main>
        <div className="dashboard">
           <div className="container">
                {children}
           </div>
            </div>
        </main>    
    )
}

export default AdminDashboard
