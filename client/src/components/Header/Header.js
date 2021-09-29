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
    return (
        <div className="header">
            <div className="container">
                <div className="header-content">
                   <Link to="/">
                        <i className="fas fa-utensils logo"></i><span className="logo_label">Resto.</span>
                    </Link>      
                    <input type="checkbox" id="check" />
                    <input type="search" className="search"
                    placeholder="search here..."
                    />
                    <div className="menu-icons">
                        {
                            isAuth ?
                                !user.isAdmin ?
                                    <>
                                <span style={{
                                    marginRight: '10px',
                      
                                    }}>Hello, {`${user.firstName} ${user.lastName}`}</span>
                                    <Link to="/favorites">
                                    <i className="fas fa-heart icon"></i>
                                 </Link>
                                 <Link to="shopping-cart">
                                    <i className="fas fa-shopping-cart icon"></i>
                                        </Link>
                                        </>
                                    :
                                    <span id="menu">Admin <i class="fa fa-chevron-down" aria-hidden="true"></i>
                                        <ul className="dropdown">
                                            <li><Link to="/admin/users">Users</Link></li>
                                            <li><Link to="/admin/foods">Foods</Link></li>
                                            <li><a href="#">Orders</a></li>
                                        </ul>
                                    </span>
                                
                                :
                            null                    
                        }

                    
            
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
