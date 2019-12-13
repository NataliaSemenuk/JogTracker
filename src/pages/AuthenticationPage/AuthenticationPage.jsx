import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {Redirect, Link} from 'react-router-dom';
import Header from '../../components/Header/Header';
import cancelIcon from '../../images/cancel.svg';
import './AuthenticationPage.css';

class AuthenticationPage extends Component {
    onRedirect = () => {
        console.log('1235');
        return <Link to='/jogs' />
    }
    render() {
        const {onClose} = this.props;
        const distance = 'distance';
        const time = 'time';
        const data = 'data';
        
        
        return (
            <div className='authenticationPage'>
                <Header/>
                <div className = 'authentication'>
                    <div className='authentication__btnClose'>
                    <Link to='/jogs'><img src={cancelIcon}/></Link>
                    </div>
                    <div className='authenticationBlock'>
                        <label className='authentication__label'>{distance}</label>
                        <input className='authentication__input'/>
                    </div>
                    <div className='authenticationBlock'>
                        <time className='authentication__label'>{time}</time>
                        <input className='authentication__input'/>
                    </div>
                    <div className='authenticationBlock'>
                        <data className='authentication__label'>{data}</data>
                        <input className='authentication__input'/>
                    </div>
                    <input className='authentication__btnSave' type='button' value='save'></input>
                </div>
            </div>
        );
    }
}
export default AuthenticationPage;