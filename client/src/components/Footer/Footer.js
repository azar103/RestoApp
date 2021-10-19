import React from 'react'
import './Footer.css';
import {useSelector} from 'react-redux';
const Footer = () => {
    const { isAuth } = useSelector(state => state.auth);
    return (
        <footer>
          <div className="container">
          <div className="footer_content">      
            {!isAuth ? <div className="business_section">
                <h2>Create your restaurant</h2>
               <button className="opacity">get started</button>
            </div> : null}
            <h3>contact</h3>
            <h3>copyright &copy; 2021</h3>
            </div>
          </div>  
        </footer>
    )
}

export default Footer
