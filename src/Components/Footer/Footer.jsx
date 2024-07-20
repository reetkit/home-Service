import React from 'react'
import './FooterStyle.css';

const Footer = () => {
    return (
        
        <>
        <div className="Footer">
            <div className="container">
                <div className="row">
                    <div className="brand-logo col-md-6 col-lg-5 col-12">
                    <img className='brand-logo-footer' src={require('../../images/brand.png')} alt="" />
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ea quo ex ullam laboriosam magni
                            totam, facere eos iure voluptate.
                        </p>
                        <div className="footer-icons">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram" ></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                    </div>
                    <div className="quickLinks col-md-6 col-lg-2 col-12">
                        <h5>Quick Links</h5>
                        <div className="qLContainer">
                            <p className="nav-item">
                                <a className="nav-link" href="/">Blog</a>
                            </p>
                            <p className="nav-item">
                                <a className="nav-link" href="/">Services</a>
                            </p>
                            <p className="nav-item">
                                <a className="nav-link" href="/">Experts</a>
                            </p>
                            <p className="nav-item">
                                <a className="nav-link" href="/">Privacy Policy</a>
                            </p>
                            <p className="nav-item">
                                <a className="nav-link" href="/">Terms And Conditions</a>
                            </p>
                        </div>
                    </div>
                    <div className="contactDetails col-md-6 col-lg-3 col-12">
                        <h5>Contact Details</h5>
                        <p><i class="fa-solid fa-phone-volume"></i>+91 8697349301</p>
                        <p><i class="fa-solid fa-envelope"></i>contacrreetkit@gmail.com</p>
                        <p><i class="fa-solid fa-paper-plane"></i>Kolkata, West Bengal.</p>
                    </div>
                    <div className="recentPosts col-md-6 col-lg-2 col-12">
                        <h5>Recent Posts</h5>
                        <p>Scrub the bathtub clean</p>
                        <p>Fall in love with Cleaning</p>
                        <p>How to remove a coffee stain</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='lastFooter'>
            <p>Copyright © 2024 Home Service - Powered by Ankit Saha</p>
        </div>
        </>
    )
}

export default Footer