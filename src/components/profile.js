import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import WOW from 'wowjs';
import 'wowjs/css/libs/animate.css';

const Profile = () => {
    useEffect(() => {
      const wow = new WOW.WOW();
      wow.init();
    }, []);
  
    return (
        <div className='profile'>
            <h2 className='head'>Company Profile</h2><br />
            <h4>Beta+</h4>
            <div className='data-container wow fadeInRightBig' data-wow-duration="1.75s">   
            <h3>EnergieCel, Pvt Ltd</h3>         
            <p className='profile-data'>With a strong RND background,With a strong RND background,With a strong RND background, EnergieCel is founded with the team of experts with the aim to provide cost effective, reliable and secure energy storage systemsreliable and secure energy storage systemsreliable and secure energy storage systems..</p>
            <Link to='/aboutUs' className='profile-btn'>Learn More</Link>
            </div>
            <div className='video wow fadeInLeft' data-wow-duration="1.75s" data-wow-delay="0.25s">   
            </div>
            </div>
    );
  }
  export default Profile