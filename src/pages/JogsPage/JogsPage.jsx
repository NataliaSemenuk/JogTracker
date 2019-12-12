import React from 'react';
import {Link} from 'react-router-dom';
import './JogsPage.css';
import Header from '../../components/Header/Header';
import JogsList from '../../components/JogsList/JogsList';
import addIcon from '../../images/add.svg'
const JogsPage = () => {
    return (
        <div className='jogsPage'>
            <Header/>
            <JogsList />
            <Link to='/' className='jogsPage__btn-add'>
                <img src={addIcon}/>
            </Link>
        </div>
    );
}
export default JogsPage;