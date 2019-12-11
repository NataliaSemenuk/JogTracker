import React from 'react';
import bearFaceImage from '../../images/bear-face.svg'
import './Authorization.css';

const Authorization = () => {
    return (
        <div className = 'authorizationBox'>
            <div className='authorizationBox__img'>
                <img src={bearFaceImage} className=''/>
            </div>
            <input type='button' value='Let me in' className='authorizationBox__btn'></input>
        </div>
    );
}
export default Authorization;