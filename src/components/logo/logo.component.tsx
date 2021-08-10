import React from 'react';
import FasterizeLogo from '../../assets/svg/fasterize_logo.svg';
import './logo.style.scss';

const LogoComponent = () => {
    return (
        <div className='logo'>
            <img className="logo__icon" src={FasterizeLogo} alt="Fasterize Logo" />
            <div className="logo__name">Fasterize</div>
        </div>   
    )
} 

export default LogoComponent;
