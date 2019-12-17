import React from 'react';
import './HomePage.css';
import Header from '../../components/Header/Header';
import Authorization from '../../components/Authorization/Authorization';

const HomePage = () => {
    return (
        <div className = 'homePage'>
            <Header isHidenFilterIcon={true} isHidenMenuIcon={true}/>
            <div className='authorizationBox-wrapper'>
                <Authorization/>
            </div>
        </div>
    );
}
export default HomePage;