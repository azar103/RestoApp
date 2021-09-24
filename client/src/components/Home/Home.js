import React from 'react'
import { useSelector } from 'react-redux';
import { RingLoader } from 'react-spinners';
import About from '../Home/About/About';
import Dishes from './Dishes/Dishes';
import Loading from '../Loading/Loading';
import Offers from './Offers/Offers';
import Review from './Review/Review';
import './Home.css';
const Home = () => {
    const loading = useSelector(state => state.auth.isLoading);
    if (loading) {
        return <Loading
        />
    }
    return (
        <div className="home">
            <Offers />
            <Dishes />
            <About />
            <Review />
        </div>
    )
}

export default Home
