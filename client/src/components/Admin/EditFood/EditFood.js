import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { editRestaurant, getRestaurantByName } from '../../../Store/actions/restaurantActions';


const EditFood = ({match}) => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);
    const { restaurant } = useSelector(state => state.restaurant);
    
    
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: ''
    });
    const history = useHistory();
    const [fieldValue, setFieldValue] = useState('');
    const food = restaurant.items.find((item) => item._id === match.params._id);
        useEffect(() => {
            dispatch(getRestaurantByName(user.name));
            setFormData({
                ...formData,
                name: food&&food.name,
                price: food&&food.price,
                description: food&&food.description
            })
        },[food&&food._id]);
  
    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
  
    const onSubmit = (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', formData.name);
        form.append('price', formData.price);
        form.append('description', formData.description);
        form.append('urlImg', fieldValue);
        dispatch(editRestaurant(user._id, match.params._id, form));
        history.push('/admin/foods');
    }
    return (
        <div className="form_create_food">
        <div className="container">
        <h2>Edit Food</h2>
                <form
                    onSubmit={onSubmit}
                    encType="multipart/form-data" method="post">
                <label>Title</label>
                    <input
                      type="text"
                      placeholder="title..."
                      name="name"
                      value={formData.name}
                      onChange={onChange}
                 />
                <label>Price</label>
                <input type="text"
                    placeholder="price..."
                    name="price"
                    value={formData.price}    
                    onChange={onChange}
                />
                <label>Description</label>
                <input
                    type="text"
                    placeholder="description..."
                    name="description"
                    value={formData.description}    
                    onChange={onChange}
                />
                <label>Select an Image</label>
                <input type="file"
                    placeholder="url..."
                        name="urlImg"
                        onChange={(e) => setFieldValue(e.target.files[0])}
                />
                <input type="submit" value="edit" className="opacity"/>
                </form>
            </div>
            </div>
    )
}

export default EditFood
