import React, {useEffect} from 'react'
import './Home.css'
import { useSelector, useDispatch } from 'react-redux';
import { getRestaurants } from '../../Store/actions/restaurantActions';
import RestaurantItem from './RestaurantItem/RestaurantItem';
import Foods from '../Admin/Foods/Foods';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';


const Home = () => {
    const { restaurants } = useSelector(state => state.restaurant);
    let { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRestaurants());
    }, [])
    const settings = {
        infinite: false,
  
        sliderToShow: 1
    }
    
    if (!user || user.account.role === "ROLE_USER") {
        return (
            <main>
            <div className="home_header">
                 
                    <h2>Livred to </h2>
                    <input type="text" className="input_search_restaurants"
                    placeholder="Enter your delivery address"
                    autoComplete="off"
                    style={{ padding: "20px" }}
                />
        </div>
     
                <div className="container">
                   
                    <section>
                        <div className="section_header">
                            <h2>our deals</h2>
                            <div className="header-right">
                                <Link to="/" >see all</Link>
                                <i className="fa fa-arrow-left icon-left-right opacity"></i>
                                <i className="fa fa-arrow-right icon-left-right opacity"></i>
                            </div>
                        </div>
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
