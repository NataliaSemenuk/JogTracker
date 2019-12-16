import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from '../../components/Header/Header';
import cancelIcon from '../../images/cancel.svg';
import './AuthenticationPage.css';
import ApiService from '../../apiService/ApiService';
import {addJog} from '../../actions/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router-dom';
import DatePicker from 'react-date-picker';

class AuthenticationPage extends Component {
    state = {
        date: new Date(),
        distance: null,
        time: null,
        isRedirect: false,
    }
    createNewJog = () => {
        const {date, distance, time} = this.state;
        const {jogs} = this.props;
        return {
            date: date,
            distance: distance,
            time: time,
        }
    }
     onCreateJog = async () => {
        const {date, distance, time} = this.state;
        if (date && distance && time) {
            const newJog = this.createNewJog();
            console.log('NEW', newJog);
            const apiService = new ApiService();
            const token = JSON.parse(localStorage.getItem('token'));
            try {
                const response = await apiService.postJog(token, newJog);
                console.log('newJog', response);
            } catch (error) {
                console.error(error);
            }
            this.setState({
                isRedirect: true,
            });
        } else {
            alert('Please, enter data');
        }
         
    }
    onChangeDistance = (event) => {
        let valueDistance = event.target.value;
        this.setState({
            distance: valueDistance,
        });
    }
    onChangeTime = (event) => {
        let valueTime = event.target.value;
        this.setState({
            time: valueTime,
        });
    }
    onChangeDate = (fullDate) => {
        this.setState({
            date: fullDate,
        });
    }
    render() {
        const {isRedirect, date} = this.state;
        const distanceTitle = 'distance';
        const timeTitle = 'time';
        const dateTitle = 'date';      
        if (isRedirect) {
            return <Redirect to='/jogs' />
        } else {
            return (
                <div className='authenticationPage'>
                    <Header isHidenFilterIcon={true}/>
                    <div className = 'authentication'>
                        <div className='authentication__btnClose'>
                        <Link to='/jogs'><img src={cancelIcon} alt='Close'/></Link>
                        </div>
                        <div className='authenticationBlock'>
                            <label className='authentication__label'>{distanceTitle}</label>
                            <input className='authentication__input' onChange={this.onChangeDistance}/>
                        </div>
                        <div className='authenticationBlock'>
                            <time className='authentication__label'>{timeTitle}</time>
                            <input className='authentication__input' onChange={this.onChangeTime}/>
                        </div>
                        <div className='authenticationBlock'>
                            <data className='authentication__label'>{dateTitle}</data>
                            <DatePicker 
                                onChange={this.onChangeDate}
                                value={date}
                                calendarIcon={null}
                                clearIcon={null}
                                dayPlaceholder=''
                                monthPlaceholder=''
                                yearPlaceholder=''
                                className='authentication__input'
                            />
                        </div>
                        <input className='authentication__btnSave' type='button' value='save' onClick={this.onCreateJog}></input>
                    </div>
                </div>
            );
        }    
    }    
}
const mapStateToProps = ({jogs}) => {
    return {
        jogs,
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addJog
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthenticationPage);