import React from 'react';
import FasterizeLogo from '../../assets/svg/fasterize_logo.svg';
import { Link } from 'react-router-dom';
import './logo.style.scss';

const LogoComponent = () => {
    return (
        <div>
            <Link to="/" className='logo'>
                <img className="logo__icon" src={FasterizeLogo} alt="Fasterize Logo" />
                <div className="logo__name">Fasterize</div>
            </Link>
        </div>   
    )
} 

export default LogoComponent;
