import React from 'react';
import './EmptyIndicator.css';
import icon from '../../images/sad-rounded-square-emoticon.svg';

const EmptyIndicator = () => {
    return (
        <div className = 'emptyIndicator'>
            <div className='emptyIndicator__img'>
                <img src={icon}/>
            </div>
            <span className='emptyIndicator__label'>Nothing is there</span>
        </div>
    );
}
export default EmptyIndicator;