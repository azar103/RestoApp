import React from 'react'
import { useSelector } from 'react-redux';
import About from '../Home/About/About';
import Dishes from './Dishes/Dishes';
import Loading from '../Loading/Loading';
import Offers from './Offers/Offers';
import Review from './Review/Review';
import Admin from '../Admin/Admin';
import './Home.css';

const Home = () => {
    const loading = useSelector(state => state.auth.isLoading);
    const user = useSelector(state => state.auth.user);
    if (loading) {
        return <Loading
        />
    }
    if (user && user.isAdmin) {
        return <Admin />
    } else {
        return (
            <div className="home">
                <Offers />
                <Dishes />
                <About />
                <Review />
            </div>
        )
    }
   
}

export default Home
