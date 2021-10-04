import React, { useState,useEffect } from 'react'
import AdminDashboard from '../AdminDashboard'
import {useDispatch, useSelector} from 'react-redux';
import { getUsers } from '../../../Store/actions/authActions';

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.auth.users);
    useEffect(() => {
         dispatch(getUsers())
    }, [])
    const [searchedValue, setSearchedValue] = useState('');
    const onChange = (e) => {
        setSearchedValue(e.target.value);
    }
    return (
        <AdminDashboard>
            <h2>Users</h2>
            <input type="search" className="search search-dashboard"
        placeholder="search here..."
        onChange={onChange}
        value={searchedValue}
          />
         <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.filter((item) => item.firstName.toLowerCase().indexOf(searchedValue.toLowerCase())!== -1).map((user) => <tr
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
