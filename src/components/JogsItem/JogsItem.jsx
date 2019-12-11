import React from 'react';
import './JogsItem.css';
import icon from '../../images/icon.svg';

const JogsItem = ({item}) => {
    return (
        <div className = 'jogsItem'>
            <div className='jogsItem__img'>
                <img src={icon}/>
            </div>
            <ul className='jogsItem-info'>
                <li className='jogsItem-info__item jogsItem-info__item_narrow-margin'>23.04.2000</li>
                <li className='jogsItem-info__item'>Spead: 15</li>
                <li className='jogsItem-info__item'>Distance: 10 km</li>
                <li className='jogsItem-info__item'>Time: 60 min</li>
            </ul>
        </div>
    );
}
export default JogsItem;