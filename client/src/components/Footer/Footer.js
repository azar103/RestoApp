import React from 'react'
import './Footer.css';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
const Footer = () => {
  const { isAuth, isLoading } = useSelector(state => state.auth);
  const history = useHistory();
  const location = useLocation();

  if (!isLoading && location.pathname !== "/addRestaurant") {
    return (
      <footer>
        <div className="container">
        <div className="footer_content">      
          {!isAuth ? <div className="business_section">
              <h2>Create your restaurant</h2>
              <button className="opacity"
                onClick={() => history.push('/addRestaurant')}
              >get started</button>
          </div> : null}
          <h3>contact</h3>
          <h3>copyright &copy; 2021</h3>
          </div>
        </div>  
      </footer>
  )
  } else {
    return null;
  }
    
}

export default Footer
