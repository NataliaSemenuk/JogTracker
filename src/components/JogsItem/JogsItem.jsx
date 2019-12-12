import React, {Fragment} from 'react';
import './JogsItem.css';
import icon from '../../images/icon.svg';

const JogsItem = ({item}) => {
    const spead = (item.distance / item.time).toFixed(2);
    return (
        <div className = 'jogsItem'>
            <div className='jogsItem__img'>
                <img src={icon}/>
            </div>
            <ul className='jogsItem-info'>
                <li className='jogsItem-info__item jogsItem-info__item_narrow-margin'>23.04.2000</li>
                <li className='jogsItem-info__item'>Spead: {spead}</li>
                <li className='jogsItem-info__item'>Distance: {item.distance}</li>
                <li className='jogsItem-info__item'>Time: {item.time} min</li>
            </ul>
        </div>
    );
}
export default JogsItem;