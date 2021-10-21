import React, {useEffect, useState} from 'react'
import AdminDashboard from '../AdminDashboard'
import {useDispatch, useSelector} from 'react-redux';
import './Foods.css';
import { Link } from 'react-router-dom';
import { deleteFood, getAllFoods } from '../../../Store/actions/foodActions';
import FoodRow from '../FoodRow/FoodRow';
const Foods = () => {
  const dispatch = useDispatch();
  const [searchedValue, setSearchedValue] = useState('');
  useEffect(() => {
    dispatch(getAllFoods())
  })
  const { foods } = useSelector(state => state.foods);
  
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
            foods && foods.filter((item) => item.name.toLowerCase().indexOf(searchedValue.toLowerCase())!== -1).map((food) => 
              <FoodRow item={food}
                onDeleteClick={() => {
                   dispatch(deleteFood(food))
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
