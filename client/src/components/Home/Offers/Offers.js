import React from 'react'
import './Offers.css';
import noodle from '../../../assets/images/home-img-1.png';
import schicken from '../../../assets/images/home-img-2.png';
import pizza from '../../../assets/images/home-img-3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import { useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

// swiper core styles
import 'swiper/swiper-bundle.css';

SwiperCore.use(Pagination);
const Offers = () => {
    const isAuth = useSelector(state => state.auth.isAuth);
    const history = useHistory();
    const buttonAuth = () => {
        if (!isAuth) {
            return (
                <button className="opacity"
                onClick={() => history.push('/login')}
                >order now</button>
            )
        } else {
            return (
                <button className="opacity"
                >order now</button>
            )
        }
    }
    return (
        <div className="offers">
            <div className="container">
                <div className="offers-content">
                    <Swiper
                        pagination={true}
                        className="mySwiper"
                        activ
                    >
                     <SwiperSlide key={1}>   
                    <div className="slide">
                    <div className="offers-description">
                    <span>Our Special Dish</span>
                    <h1>Noodles</h1>
                    <p>Consequat exercitation veniam Lorem tempor labore id anim sit.
                    Nulla labore amet deserunt fugiat.
                        </p>
                        {buttonAuth()}
                    </div>
                    <div className="offers-img">
                        <img src={noodle} alt="dish" />
                        </div>
                    </div>
                        </SwiperSlide>
                    <SwiperSlide key={2}>    
                    <div className="slide">
                    <div className="offers-description">
                    <span>Our Special Dish</span>
                    <h1>Fried Schicken</h1>
                    <p>Consequat exercitation veniam Lorem tempor labore id anim sit.
                    Nulla labore amet deserunt fugiat.
                                    </p>
                                 
                    {buttonAuth()}
                                            
                                      
                    </div>
                    <div className="offers-img">
                        <img src={schicken} alt="dish" />
                        </div>
                </div>
                        </SwiperSlide>
                        <SwiperSlide key={2}>    
                    <div className="slide">
                    <div className="offers-description">
                    <span>Our Special Dish</span>
                    <h1>Hot Pizza</h1>
                    <p>Consequat exercitation veniam Lorem tempor labore id anim sit.
                    Nulla labore amet deserunt fugiat.
                        </p>
                        {buttonAuth()}
                    </div>
                    <div className="offers-img">
                        <img src={pizza} alt="dish" />
                        </div>
                </div>
                </SwiperSlide>
                </Swiper>      
                </div>     
            </div>
        </div>
    )
}

export default Offers
