import React, {useEffect} from 'react'
import AdminDashboard from '../AdminDashboard'
import {useDispatch, useSelector} from 'react-redux';
import './Foods.css';
import { Link } from 'react-router-dom';
import { deleteFood, getAllFoods } from '../../../Store/actions/foodActions';
import Loading from '../../Loading/Loading';
import {useHistory} from 'react-router-dom';
const Foods = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFoods())
  })
  const foods = useSelector(state => state.foods.foods);
 
    return (
      <AdminDashboard>
         <header>
          <h2>Foods</h2>
          <Link to="/admin/createFood" className="opacity">Create Food</Link>
         </header> 
         <table>
         <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>#</th>
          </tr>
          <tbody>
            {
              foods && foods.map((food) => <tr key={food._id}>
                <td>{food._id}</td>
                <td>{food.name}</td>
                <td>{food.price}</td>
                <td><i className="fa fa-edit"></i>
                  <i className="fa fa-trash" id="trash"
                    onClick={() => {
                      dispatch(deleteFood(food))
                    }}
                  ></i>
                </td>
              </tr>)
          }  
        </tbody>  
      </table>
        </AdminDashboard>
    )
}

export default Foods
