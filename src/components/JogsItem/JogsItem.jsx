import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './JogsItem.css';
import profileIcon from '../../images/icon.svg';
import {connect} from 'react-redux';
import {changeJog} from '../../actions/actions';
import { bindActionCreators } from 'redux';

class JogsItem extends Component {
    state = {
        isOpenToChange: false,
    }
    onClickProfile = () => {
        const {item} =this.props;
        this.props.changeJog(item);
        this.setState({
            isOpenToChange: true,
        });
    }
    render() {
        const {item} =this.props;
        const {isOpenToChange} =this.state;
        const speed = (item.distance / item.time).toFixed(2);
        const fullDate = new Date(item.date*1000);
        const date = fullDate.getDate();
        let month = fullDate.getMonth() + 1;
        const year = fullDate.getFullYear();    
        
        return (
            <div className = 'jogsItem'>
                <Link to='/creation'>
                    <div className='jogsItem__img'>
                        <img src={profileIcon} alt='Profile Icon' onClick={this.onClickProfile}/>
                    </div>
                </Link>
                <ul className='jogsItem-info'>
                    <li className='jogsItem-info__item jogsItem-info__item_narrow-margin'>{date}.{month}.{year}</li>
                    <li className='jogsItem-info__item'>Speed: {speed}</li>
                    <li className='jogsItem-info__item'>Distance: {item.distance}</li>
                    <li className='jogsItem-info__item'>Time: {item.time} min</li>
                </ul>
            </div>
        );
    }     
}
const mapDispatchToProps  = (dispatch) => {
    return bindActionCreators({
        changeJog
    }, dispatch);
}
export default connect(null, mapDispatchToProps)(JogsItem);