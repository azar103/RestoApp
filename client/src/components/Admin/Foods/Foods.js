import React, {useEffect} from 'react'
import AdminDashboard from '../AdminDashboard'
import {useDispatch, useSelector} from 'react-redux';
import './Foods.css';
const Foods = () => {
  const dispatch = useDispatch();
  useEffect(() => {
  }, [])
  const foods = useSelector(state => state.foods.foods);
    return (
      <AdminDashboard>
        <header>
          <h2>Foods</h2>
          <button className="opacity">Create Food</button>
        </header> 
        <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>#</th>
        </tr>
       
      </table>
        </AdminDashboard>
    )
}

export default Foods
