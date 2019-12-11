import React from 'react';
import './HomePage.css';
import Header from '../../components/Header/Header';
import Authorization from '../../components/Authorization/Authorization';

const HomePage = () => {
    return (
        <div className = 'homePage'>
            <Header/>
            <Authorization/>
        </div>
    );
}
export default HomePage;