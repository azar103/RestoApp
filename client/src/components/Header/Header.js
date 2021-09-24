import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import './Header.css';
import { logout } from '../../Store/actions/authActions';
const Header = () => {
    const isAuth = useSelector(state => state.auth.isAuth);
    const user = useSelector(state => state.auth.user);
    const history = useHistory();
    const dispatch = useDispatch();
    console.log(isAuth);
    return (
        <div className="header">
            <div className="container">
                <div className="header-content">
                   <Link to="/">
                        <i className="fas fa-utensils logo"></i><span>Resto.</span>
                    </Link>      
                    <input type="checkbox" id="check" />
                    <input type="search" className="search"
                    placeholder="search here..."
                    />
                    <div className="menu-icons">
                        {
                            isAuth ?
                                <span style={{
                                    marginRight: '10px',
                      
                             }}>Hello, {`${user.firstName} ${user.lastName}`}</span>
                                :
                            null                    
                        }
                        <Link to="/favorites">
                           <i className="fas fa-heart icon"></i>
                        </Link>
                        <Link to="shopping-cart">
                           <i className="fas fa-shopping-cart icon"></i>
                        </Link>
                        {
                            isAuth ?
                            <Link className="btn-login opacity"
                                    to="/login"
                                    onClick={() => {
                                        dispatch(logout())
                                        history.push('/login')
                                    }}
                            >
                            <i className="fas fa-sign-in-alt icon"></i>
                                Logout
                            </Link>
                                :
                                <Link className="btn-login opacity"
                                    to="/login"
                         
                                >
                                <i className="fas fa-sign-in-alt icon"></i>
                                    Login
                                    </Link>  
                        }
                
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Header