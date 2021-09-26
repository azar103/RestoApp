import React from 'react'
import './About.css';
import about from '../../../assets/images/about-img.png';
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div className="about">
            <div className="about-header">
                        <span>about us</span>
                        <h2>why choose us ?</h2>
            </div>
            <div className="container">
                <div className="about-content">
                    <div className="image">
                        <img src={about} alt="about" />
                    </div>
                    <div className="about-description">
                        <h3>best food in the country</h3>
                        <p>
                        Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Dolore, Sequi Corrupti Corporis Quaerat Voluptatem Ipsam Neque Labore Modi Autem, Saepe Numquam Quod Reprehenderit Rem? Tempora Aut Soluta Odio Corporis Nihil!

Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Aperiam, Nemo. Sit Porro Illo Eos Cumque Deleniti Iste Alias, Eum Natus.
                        </p>
                        <div className="icons-container">
                        <div class="icons">
                            <i class="fas fa-shipping-fast"></i>
                            <span>free delivery</span>
                       </div>
                       <div class="icons second">
                        <i class="fas fa-dollar-sign"></i>
                        <span>easy payments</span>
                      </div>
                      <div class="icons">
                        <i class="fas fa-headset"></i>
                        <span>24/7 service</span>
                      </div>
                        </div>
                        <Link to="/contact" className="opacity">learn more</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
