import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { clearErrors } from '../../../Store/actions/errorActions';
import { saveFood } from '../../../Store/actions/foodActions';
import './AddFood.css'
const AddFood = () => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
    });
    const [fieldValue, setFieldvalue] = useState('urlImg');
    const dispatch = useDispatch();
    const history = useHistory();
    const [msg, setMsg] = useState(null);
    const { error } = useSelector(state => state.error);
    const {_id} = useSelector(state => state.auth.user.account)
    /*useEffect(() => {
        if (error.id === 'CREATE_FOOD_ERROR') {
            setMsg(error.msg.msg)
        } else {
            setMsg(null);
        }

    }, [error.msg]);*/

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        dispatch(clearErrors())
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', formData.name);
        form.append('price', formData.price);
        form.append('description', formData.description);
        form.append('urlImg', fieldValue);
        form.append('owner', _id);

        dispatch(saveFood(form));
        if(msg===null)
            history.push('/admin/foods');
    }
    return (
        <main>
        <div className="form_create_food">
            <div className="container">
                <h2>Create Food</h2>
                {msg ? <div className="message-error">{msg}</div> : null}
                <form onSubmit={onSubmit} encType="multipart/form-data" method="post">
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
                    <input type="file"
                        placeholder="url..."
                        name="urlImg"
                        onChange={(e) => setFieldvalue(e.target.files[0])}
                    />
                    <input type="submit" value="save" className="opacity"/>
                </form>
            </div>     
            </div>
            </main>
    )
}

export default AddFood
