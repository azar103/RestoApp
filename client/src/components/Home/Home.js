import React from 'react'
import './Home.css'
const Home = () => {

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
                    style={{padding:"20px"}}
                />
                <section className="restaurants_list">
                    <h2>our deals</h2>
                    <p>No Restaurants currently available in your area</p>
                </section>
            </div>
        </main>
    )
}

export default Home
