import React from 'react';
import google from "../../../images/google.png";
import appStore from "../../../images/app-store.png";
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer">
        <div className='leftFooter'>
            <h4>Download our App</h4>
            <p>Download App for Ios and Android Mobile Phone</p>
            <img src={google} alt="play store"/>
            <img src={appStore} alt="app store"/>
        </div>
        <div className='midFooter'>
            <h1>Ecommerce</h1>
            <p>High Quality is our 1st priority</p>

        </div>
        <div className='rightFooter'>
            <h4>Follow Us</h4>
            <a>Instagram</a>
            <a>Youtube</a>
            <a>Facebook</a>
        </div>
    </footer>
  )
}

export default Footer;
