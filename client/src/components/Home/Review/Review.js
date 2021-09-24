import React from 'react'
import './Review.css'
import pic1 from '../../../assets/images/pic-1.png';
import pic2 from '../../../assets/images/pic-2.png';
import pic3 from '../../../assets/images/pic-3.png';
const Review = () => {
    return (
        <div className="review">
                <div className="container">
                <div className="review-content">
                    <div className="review-header">
                      <span>customer's review</span>
                        <h2>what that say</h2>
                    </div>    
                        <div className="reviews">
                        <div className="review-box">
                                <div className="review-box-header">
                                 <div className="user">
                                <div className="img">
                                    <img src={pic1} alt="pic1" />
                                </div>
                                 <h3>John Doe</h3>
                                </div>           
                                 <i class="fas fa-quote-right"></i>
                                </div>   
                                <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.
                                </p>
                        
                        </div>
                        <div className="review-box">
                                <div className="review-box-header">
                                <div className="user">  
                                <div className="img">
                                    <img src={pic2} alt="pic1" />
                                </div>
                                        <h3>John Doe</h3>
                                </div>          
                                    <i class="fas fa-quote-right"></i>
                                </div>   
                                <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.
                                </p>  
                        </div>
                        <div className="review-box">
                                <div className="review-box-header">
                                <div className="user">  
                                <div className="img">
                                    <img src={pic3} alt="pic1" />
                                </div>
                                        <h3>John Doe</h3>
                                </div>          
                                    <i class="fas fa-quote-right"></i>
                                </div>   
                                <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.
                                </p>
                        
                            </div>
                        </div>    

                    </div>    
                </div>     
          
        </div>
    )
}

export default Review
