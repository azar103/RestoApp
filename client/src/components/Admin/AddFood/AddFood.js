import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { saveFood } from '../../../Store/actions/foodActions';
import './AddFood.css'
const AddFood = () => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        urlImg:''
    })
    const dispatch = useDispatch();
    const history = useHistory();
    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
         })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(saveFood(formData))
        history.push('/admin/foods');
    }
    return (
        <div className="form_create_food">
            <div className="container">
            <h2>Create Food</h2>
                <form onSubmit={onSubmit}>
                    <label>Title</label>
                    <input type="text"
                        placeholder="title..."
                        name="name"
                        onChange={onChange}
                        value={formData.name}
                    />
                    <label>Price</label>
                    <input type="text"
                        placeholder="price..."
                        name="price"
                        onChange={onChange}
                        value={formData.price}
                    />
                    <label>Description</label>
                    <input type="text"
                        placeholder="description..."
                        name="description"
                        onChange={onChange}
                        value={formData.description}
                    />
                    <label>Select an Image</label>
                    <input type="text"
                        placeholder="url..."
                        name="urlImg"
                        onChange={onChange}
                        value={formData.urlImg}
                    />
                    <input type="submit" value="save" className="opacity"/>
                </form>
            </div>     
        </div>
    )
}

export default AddFood
