import React, {Fragment} from 'react';
import './JogsItem.css';
import icon from '../../images/icon.svg';

const JogsItem = ({item}) => {
    const speed = (item.distance / item.time).toFixed(2);
    const fullDate = new Date(item.date);
    const date = fullDate.getDate();
    let month = fullDate.getMonth() + 1;
    const year = fullDate.getFullYear();
    return (
        <div className = 'jogsItem'>
            <div className='jogsItem__img'>
                <img src={icon}/>
            </div>
            <ul className='jogsItem-info'>
                <li className='jogsItem-info__item jogsItem-info__item_narrow-margin'>{date}.{month}.{year}</li>
                <li className='jogsItem-info__item'>Speed: {speed}</li>
                <li className='jogsItem-info__item'>Distance: {item.distance}</li>
                <li className='jogsItem-info__item'>Time: {item.time} min</li>
            </ul>
        </div>
    );
}
export default JogsItem;