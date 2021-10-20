import React from 'react'
import './AddRestaurant.css'
const AddRestaurant = () => {

    return (
        <main>
            <div className="container">
                <div className="add_restaurant_content">
                    <h2>Add a Restaurant</h2>
                    <span>Basic info-Get Started</span>
                    <form>
                        <input type="text" name="name" placeholder="Restaurant Name*" />
                        <input type="text" name="email" placeholder="Restaurant Email*" />
                        <input type="text" name="minOrderAmount*" placeholder="Min Order Amount*" />
                        <div className="address_section">
                            <h2>Address</h2>
                            <div className="form_address_section">
                                <input type="text" name="locality" placeholder="Locality*" />
                                <input type="text" name="street" placeholder="Street*" />
                                <input type="text" name="zip" placeholder="ZipCode*" />
                                <input type="text" name="phone" placeholder="Phone Number*" />
                                <input type="text" name="latitude" placeholder="Latitude*" />
                                <input type="text" name="longitude" placeholder="Longitude*"/>
                            </div>
                        </div>
                        <input
                            type="file"
                            name="imageUrl"
                        />
                        <input type="password" name="password" placeholder="Password*" />
                        <input type="password" name="password" placeholder="Confirm your password*" />
                        <input type="submit" value="submit" className="opacity" />
                    </form>
                </div>
            </div>
        </main>
    )
}

export default AddRestaurant
