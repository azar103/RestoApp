import React, {useEffect, useState} from 'react'
import AdminDashboard from '../AdminDashboard'
import {useDispatch, useSelector} from 'react-redux';
import './Foods.css';
import { Link } from 'react-router-dom';
import {getRestaurantByName, removeRestaurantItem } from '../../../Store/actions/restaurantActions';
import FoodRow from '../FoodRow/FoodRow';


const Foods = () => {
  const dispatch = useDispatch();
  const [searchedValue, setSearchedValue] = useState('');
  const { user } = useSelector(state => state.auth);
  const { restaurant } = useSelector(state => state.restaurant);
  useEffect(() => {
    dispatch(getRestaurantByName(user.name.toString()));

  })

  const onChange = (e) => {
    setSearchedValue(e.target.value);
  }


  return (
      <AdminDashboard>
         <header>
          <h2>Foods</h2>
          <Link to="/admin/createFood" className="opacity">Create Food</Link>
      </header>
      <input type="search" className="search search-dashboard"
        placeholder="search here..."
        onChange={onChange}
        value={searchedValue}
          />
         <table>
         <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>#</th>
          </tr>
          <tbody>
            {
            restaurant.items && restaurant.items.filter((item) => item.name.toLowerCase().indexOf(searchedValue.toLowerCase())!== -1).map((food) => 
              <FoodRow item={food}
                onDeleteClick={() => {
                   dispatch(removeRestaurantItem(user.name, food._id))
                }}
              />
              )
          }  
        </tbody>  
      </table>
      </AdminDashboard>


    )
}

export default Foods
