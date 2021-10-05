import React from 'react'
import { useSelector } from 'react-redux';
import Dishes from './Dishes/Dishes';
import Loading from '../Loading/Loading';

import './Home.css';
import Users from '../Admin/Users/Users';
import header from '../../assets/images/header.jpg';

const Home = () => {
    const loading = useSelector(state => state.auth.isLoading);
    let user = useSelector(state => state.auth.user);
    if (loading) {
        return <Loading />
    }
    if (user && user.isAdmin) {
        return <Users />
    } else {
        return (
            <div className="home">
                <div className="home-header"
                >
                    <div className="overlay">
                        <h1>White Palace Grill</h1>
                        <p>Address: 2000, rue de gabes, bardo</p>
                        <p>Call: +216  22555222</p>
                        <p>Open: to 8am to 11pm</p>
                    </div>
                </div>
                <Dishes />
            </div>
        )
    }
   
}

export default Home
