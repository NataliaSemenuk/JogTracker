import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import filterActive from '../../images/filter-active.svg';

const Header = () => {
    return (
        <header className = 'header'>
            <div>
                <img src={logo} className='logo'/>
            </div>
            
            <nav>
                <ul className = 'header-navbar'>
                    <li className = 'header-navbar__item'>jogs</li>
                    <li className = 'header-navbar__item'>info</li>
                    <li className = 'header-navbar__item'>contact us</li>
                </ul>
            </nav>
            <img src={filterActive} className='filter_active'></img>
        </header>
    );
}
export default Header;