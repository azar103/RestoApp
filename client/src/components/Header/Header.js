import React, {useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import './Header.css';
import { logout } from '../../Store/actions/authActions';
import { getCartItems } from '../../Store/actions/cartActions';
const Header = () => {
    const isAuth = useSelector(state => state.auth.isAuth);
    const user = useSelector(state => state.auth.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cart);
    useEffect(() => {
        dispatch(getCartItems())
        numberOfItems()
    }, [getCartItems])
    const numberOfItems = () => {
        
        if (user) {
            return cartItems.filter(item => item.userId === user._id).length
        } else {
            return 0;
        }
            
    }

    return (
        <div className="header">
            <div className="container">
                <div className="header-content">
                   <Link to="/">
                        <i className="fas fa-utensils logo"></i><span className="logo_label">Resto.</span>
                    </Link>      
                    <input type="checkbox" id="check" />
            
                        
                    <div className="menu-icons">
                        {
                            isAuth ?
                                user.account.role === "ROLE_USER" ?
                                    <>
                                <span style={{
                                    marginRight: '10px',
                      
                                    }}>Hello, {`${user.firstName} ${user.lastName}`}</span>
                                        <Link to="/orderDetails">
                                        <i class="fa fa-shopping-bag icon"></i>
                                        </Link>
                                    <Link to="/shopping-cart">
                            
                                            <i className="fas fa-shopping-cart icon">
                                                {numberOfItems() > 0 && 
                                                    <div className="notification">{numberOfItems()}</div>
                                                }
                                           
                                            </i>
                                        </Link>
                                        </>
                                    :
                                    <span id="menu">Admin <i class="fa fa-chevron-down" aria-hidden="true"></i>
                                        <ul className="dropdown">
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
