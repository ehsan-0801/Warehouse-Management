import React from 'react';

const Footer = () => {
    return (
        <div className="container mx-auto">
            <p>Copyright©{ (new Date().getFullYear()) }</p>
        </div>
    );
};

export default Footer;