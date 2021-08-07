import React from 'react';
import './side-bar.style.scss'
import LogoComponent from '../logo/logo.component'

const SideBarComponent = () => {
    return (
        <div className='sidebar'>
            <LogoComponent></LogoComponent>
        </div>
    )
}

export default SideBarComponent;