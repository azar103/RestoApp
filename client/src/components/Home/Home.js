import React, {useEffect, useState} from 'react'
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
    const [index, seIndex] = useState(0);
    const [value, setValue] = useState('');
    const [pressed, setPressed] = useState(false);

    useEffect(() => {
        dispatch(getRestaurants());
    }, [])
    const onChange = (e) => {
        setValue(e.target.value);
    }
    const settings = {
        infinite: false,
  
        sliderToShow: 1
    }
    const filterArray = (arr) => {
        return arr.filter((restaurant) => restaurant.address.locality.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    }

    const onPress = (e) => {
        if (e.key === 'Enter') {
            setPressed(true);
        } else {
            setPressed(false);
        }

    }
    
    if (!user || user.account.role === "ROLE_USER") {
        return (
            <main>
            <div className="home_header">
                 
                    <h2>Livred to </h2>
                    <input type="text" className="input_search_restaurants"
                    placeholder="Enter your delivery address"
                    autoComplete="off"
                       style={{ padding: "30px 0px 30px 50px" }}
                        value={value}
                        onChange={onChange}
                        onKeyPress={onPress}                       
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
                   
                            {pressed?                         
                                  filterArray(restaurants).map((restaurant) => <RestaurantItem
                                    item={restaurant}
                                />)
                             
                                :
                                restaurants.map((restaurant) => <RestaurantItem
                                    item={restaurant}/>
                                )
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
