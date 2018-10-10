import React from 'react';
import './Header.css';


const Header = (props) => {
    return (
        <div className='header-wrapper' role='application'>
            <h1>
             React + Google Maps API
            </h1>
            <div className='nav-menu'>
                <div className='open-btn'
                tabIndex='0'
                 onClick={props.hamburgerOpen}
                 aria-labelledby="Hamburger menu" aria-label='Open Sidebar'>&#9776;
                 </div>
            </div>

        </div>
    );
}

export default Header;
