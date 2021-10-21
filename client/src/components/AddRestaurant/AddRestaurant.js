import React, {useState, useEffect} from 'react'
import './AddRestaurant.css'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { clearErrors } from '../../Store/actions/errorActions';
import { createRestaurant } from '../../Store/actions/restaurantActions';
import { logout } from '../../Store/actions/authActions';
const AddRestaurant = () => {
    const dispatch = useDispatch();
    const { isAuth } = useSelector(state => state.auth);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        imageUrl: '',
        street: '',
        locality: '',
        zip: '',
        lat: '',
        lng: '',
        phoneNum:'',
        minOrderAmount: '',
        password: '',
        passwordConfirmed:''
    });
    const history = useHistory();
    const { error } = useSelector(state => state.error);
    const [msg, setMsg] = useState(null);
    const [fieldValue, setFieldvalue] = useState('imageUrl');

    useEffect(() => {
        if (isAuth) {
            history.push('/');
        }
        dispatch(clearErrors())
    }, [isAuth, clearErrors])
    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const addRestaurant = (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', formData.name);
        form.append('email', formData.email);
        form.append('imageUrl', fieldValue);
        form.append('street', formData.street);
        form.append('locality', formData.locality);
        form.append('zip', formData.zip);
        form.append('lat', formData.lat);
        form.append('lng', formData.lng);
        form.append('phoneNum', formData.phoneNum);
        form.append('minOrderAmount', formData.minOrderAmount);
        form.append('password', formData.password);
        form.append('passwordConfirmed', formData.passwordConfirmed);
        dispatch(createRestaurant(form));
        dispatch(logout());
         history.push('/login');
    }

    return (
        <main>
            <div className="container">
                <div className="add_restaurant_content">
                    <h2>Add a Restaurant</h2>
                    <span>Basic info-Get Started</span>
                    <form onSubmit={addRestaurant} encType="multipart/form-data" method="post">
                        <input
                            type="text"
                            name="name"
                            placeholder="Restaurant Name*"
                            value={formData.name}
                            onChange={onChange}
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Restaurant Email*"
                            value={formData.email}
                            onChange={onChange}
                         />
                        <input type="text"
                            name="minOrderAmount"
                            placeholder="Min Order Amount*"
                            value={formData.minOrderAmount}
                            onChange={onChange}
                        />
                        <div className="address_section">
                            <h2>Address</h2>
                            <div className="form_address_section">
                                <input type="text"
                                    name="locality"
                                    placeholder="Locality*"
                                    value={formData.locality}
                                    onChange={onChange}
                                />
                                <input type="text" name="street" placeholder="Street*"
                                    value={formData.street}
                                    onChange={onChange}
                                />
                                <input
                                    type="text"
                                    name="zip"
                                    placeholder="ZipCode*"
                                    value={formData.zip}
                                    onChange={onChange}
                                />
                                <input type="text"
                                    name="phoneNum" placeholder="Phone Number*"
                                    value={formData.phoneNum}
                                    onChange={onChange}
                                />
                                <input type="text"
                                    name="lat"
                                    placeholder="Latitude*"
                                    value={formData.lat}
                                    onChange={onChange}
                                />
                                <input type="text"
                                        name="lng"
                                       placeholder="Longitude*"
                                    value={formData.lng}
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        <input
                            type="file"
                            name="imageUrl"
                            onChange={(e) => setFieldvalue(e.target.files[0])}

                        />
                        <input type="password"
                            name="password"
                            onChange={onChange}
                             value={formData.password}
                            placeholder="Password*" />
                        <input type="password"
                            name="passwordConfirmed"
                            onChange={onChange}
                            value={formData.passwordConfirmed}
                            placeholder="Confirm your password*" />
                        <input type="submit" value="submit" className="opacity" />
                    </form>
                </div>
            </div>
        </main>
    )
}

export default AddRestaurant
