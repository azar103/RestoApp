import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Dishes from './Dishes/Dishes';
import Loading from '../Loading/Loading';
import './Restaurant.css';
import { getRestaurantById, getRestaurantByName } from '../../Store/actions/restaurantActions';
import { useParams } from 'react-router';


const Restaurant = () => {
    const loading = useSelector(state => state.auth.isLoading);
    const { restaurant, restaurants } = useSelector(state => state.restaurant);
    const { id } = useParams();
    const dispatch = useDispatch();

    const findRestaurantById = (id) => {
        const restaurantObj = restaurants.find((item) => item._id === id);
        return restaurantObj;
    }

    
    
    useEffect(() => {
        const obj = findRestaurantById(id);
        dispatch(getRestaurantByName(obj.name));
    
    }, [id])
    if (loading) {
        return <Loading />
    }

        return (
            <div className="home">
                <div className="home-header"
                >
                    <div className="overlay">
                        <h1>{restaurant.name}</h1>
                        <p>Address: {`${restaurant.address.street},${restaurant.address.locality}`}</p>
                        <p>Call: {restaurant.address.phoneNum}</p>
                        <p>Open: to 8am to 11pm</p>
                    </div>
                </div>
                <Dishes
                restaurant={restaurant}
                />
             
            </div>
        )

   
}

export default Restaurant
