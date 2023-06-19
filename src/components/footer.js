import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="contact">
          <div className="footerLogo">
            <img src={require('../resources/img/betaLight.png')} alt="Beta+" />
          </div>
          <div className="contactInfo">
            <h2>Shenzhen Beta Technology Co., Ltd</h2>
            <h3>Add: 1618 Huitong Building, 10 Longgang Road, Pingnan Community, Longgang Street, Longgang District, Shenzhen</h3>
            <h4>sales@a-beta.net</h4>
          </div>
          <div className="socialmedia">
            <Link to="https://www.linkedin.com/company/beta-ess-li-ion-batteries"><img src={require('../resources/img/linkedin.png')} alt="LinkedIn" className='smlogo' /></Link>
            <Link to="/"><img src={require('../resources/img/facebook.png')} alt="Facebook" className='smlogo'  /></Link>
            <Link to="/"><img src={require('../resources/img/twitter.png')} alt="Twitter" className='smlogo'  /></Link>
            <Link to="/"><img src={require('../resources/img/youtube.png')} alt="Youtube"  className='smlogo' /></Link> 
          </div>
        </div>
        <div className="footerLinks">
          <div className="footerNav">
            <Link to="/" className='footerNavLinks'>Home</Link>
            <Link to="/Download" className='footerNavLinks'>Downloads</Link>
            <Link to="/" className='footerNavLinks'>Blog</Link>
            <Link to="/aboutUs" className='footerNavLinks'>About us</Link>
            <Link to="/contactUs" className='footerNavLinks'>Contact us</Link>
          </div>
          <div className="footerPS">
            <ul className='footerSolutions'><Link to="/SolarESSCS" className='footerSolutionsLinkS'>Solutions</Link>
              <li><Link to="/SolarESSCS" className='footerSolutionsLink'>ESS Charging Station</Link></li>
              <li><Link to="/SolarESSCS" className='footerSolutionsLink'>Off Grid Power</Link></li>
              <li><Link to="/SolarESSCS" className='footerSolutionsLink'>Solar and Wind </Link></li>
            </ul>
            <ul className='footerProducts'><Link to="/Product" className='footerSolutionsLinkP'>Products</Link>
              <li><Link to="/2URackmount" className='footerSolutionsLink'>Residential Series</Link></li>
              <li><Link to="/2URackmount" className='footerSolutionsLink'>C&I Series </Link></li>
              <li><Link to="/2URackmount" className='footerSolutionsLink'>Portable Series </Link></li>
              <li><Link to="/2URackmount" className='footerSolutionsLink'>Components</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright 2007-2023 Shenzhen Beta Technology Co., Ltd.</p>
      </div>
    </>
  );
};

export default Footer;
