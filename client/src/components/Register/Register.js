import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import './Register.css'
import { register } from '../../Store/actions/authActions';
import Loading from '../Loading/Loading';
import { clearErrors } from '../../Store/actions/errorActions';
const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirmed: '',
        role:""
    });
    const history = useHistory();
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.auth.isLoading);
    const error = useSelector(state => state.error);
    const isAuth = useSelector(state => state.auth.isAuth);
    const [msg, setMsg] = useState(null);
    
    useEffect(() => {
        console.log(isLoading);
        if (error.id === 'REGISTER_ERROR') {
            setMsg(error.msg.msg)
        } else {
            setMsg(null);
        }  
    }, [error.msg]);
    useEffect(() => {
        if (isAuth) {
            history.push('/')
        }
        dispatch(clearErrors())
    }, [isAuth, clearErrors])
    const handleChangeForm = (e) => {
        setFormData({
            ...formData,
            role:"ROLE_USER",
            [e.target.name]: e.target.value
        });
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(register(formData));
    }
      if (isLoading) {
          return <Loading />
       }
        return (
            <div className="form-register">
                <h2>Register</h2>
                {msg ? <div className="message-error">{msg}</div> : null}
                <form
                    onSubmit={onSubmit}
                >
                    <label>First Name:</label>
                    <input type="text"
                        placeholder="first name..."
                        onChange={handleChangeForm}
                        value={formData.firstName}
                        name="firstName"
                    />
                    <label>Last Name:</label>
                    <input type="text"
                        placeholder="last name..."
                        onChange={handleChangeForm}
                        value={formData.lastName}
                        name="lastName"
                    />
                    <label>Email:</label>
                    <input type="text"
                        placeholder="email..."
                        onChange={handleChangeForm}
                        name="email"
                    />
                    <label>Password:</label>
                    <input type="password"
                        placeholder="password..."
                        onChange={handleChangeForm}
                        value={formData.password}
                        name="password"
                    />
                    <label>Confirm You Password:</label>
                    <input type="password"
                        placeholder="confirm your password..."
                        onChange={handleChangeForm}
                        value={formData.passwordConfirmed}
                        name="passwordConfirmed"
                    />
                    <Link to="/login">
                        if you have already an account, login here
                    </Link>
                    <input type="submit" value="Sign-Up" className="opacity" />
        
                </form>
            </div>
    
        )
}

export default Register
