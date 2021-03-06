import React, {useEffect, useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import './Login.css'
import { login} from '../../Store/actions/authActions';
import { clearErrors } from '../../Store/actions/errorActions';
import Loading from '../Loading/Loading';
import image from '../../assets/images/delivery_back.jpg'

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [formData, setFormData] = useState({
        email: '',
        password:''
    });
    const user = useSelector(state => state.auth.user)
    const error = useSelector(state => state.error);
    const isAuth = useSelector(state => state.auth.isAuth);
    const isAdmin = useSelector(state => state.auth.user);
    const loading = useSelector(state => state.auth.isLoading);
    const [msg, setMsg] = useState(null);
    
    useEffect(() => {
        if (error.id === 'LOGIN_ERROR') {
            setMsg(error.msg.msg)
        } else {
            setMsg(null);
        }  
    }, [error.msg]);
    useEffect(() => {
        if (isAuth) {
            history.push('/');
        } 
        dispatch(clearErrors())
    }, [isAuth, clearErrors])
  
    const onHandleChangeForm = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
      })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(login(formData));
    }
    if (loading) {
        return <Loading />
    }
 

    return (
        <main>
            <div className="container">
            <div className="form-content">    
            <div className="form-login">
                <h2>Login</h2>
                {msg ? <div className="message-error">{msg}</div> : null}
                <form
                    onSubmit={onSubmit}            
                >
                    <label>Email:</label>
                    <input type="text" placeholder="email..."
                        name="email"    
                        onChange={onHandleChangeForm}
                        value={formData.email}
                        className=""    
                    />
                    <label>Password:</label>
                        <input
                            type="password"
                            placeholder="password..."
                            name="password"    
                            onChange={onHandleChangeForm}
                            value={formData.password}
                    />
                    <Link to="/register">
                      if you are not a member, register here
                    </Link>
                    <input type="submit" value="Sign-In" className="opacity" />
               
                </form>
        
                    </div>
                    <div
                    className="image"
                   >
                        <img src={image} alt=""/>
                   </div>
                </div>
             
            </div>
            </main>
        )
    
   
}

export default Login
