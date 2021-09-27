import React from 'react'
import './AdminDashboard.css'
const AdminDashboard = ({children}) => {
    return (
        <div className="dashboard">
           <div className="container">
                {children}
           </div>
        </div>
    )
}

export default AdminDashboard
