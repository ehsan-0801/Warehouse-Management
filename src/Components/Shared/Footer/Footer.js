import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="container-fluid mx-auto footer">
            <p>CopyrightÂ©{ (new Date().getFullYear()) }</p>
        </div>
    );
};

export default Footer;