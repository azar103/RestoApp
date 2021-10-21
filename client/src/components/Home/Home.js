import React, {useEffect} from 'react'
import './Home.css'
import { useSelector, useDispatch } from 'react-redux';
import { getRestaurants } from '../../Store/actions/restaurantActions';
import RestaurantItem from './RestaurantItem/RestaurantItem';
import Foods from '../Admin/Foods/Foods';

const Home = () => {
    const { restaurants } = useSelector(state => state.restaurant);
    let { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRestaurants());
    }, [])
    
    if (!user || user.account.role === "ROLE_USER") {
        return (
            <main>
                <div className="container">
                    <div className="home_header">
                        <i className="fas fa-map-marker-alt"></i>
                        <h2>Livred to </h2>
                    </div>
                    <input type="text" className="input_search_restaurants"
                        placeholder="Enter your delivery address"
                        autoComplete="off"
                        style={{ padding: "20px" }}
                    />
                    <section>
                        <h2>our deals</h2>
                        <div className="restaurants_list">
                            {restaurants.length > 0 ?
                                restaurants.map((restaurant) => <RestaurantItem
                                    item={restaurant}
                                />)
                                :
                                <p>No Restaurants currently available in your area</p>
                            }
                        </div>
    
                    </section>
                </div>
            </main>
        )
    } else {
        return <Foods />
    }
}

export default Home
