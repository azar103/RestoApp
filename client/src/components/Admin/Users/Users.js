import React, { useEffect } from 'react'
import AdminDashboard from '../AdminDashboard'
import { Button, Table } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import { getUsers } from '../../../Store/actions/authActions';

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.auth.users);
    useEffect(() => {
         dispatch(getUsers())
    }, [])
    return (
        <AdminDashboard>
            <h2>Users</h2>
        <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((user) => <tr
                    key={user._id}
                    >
                        <td>{user._id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                    </tr>)}
                </tbody>
            </table>
        
        </AdminDashboard>
    )
}

export default Users
