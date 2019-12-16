import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './JogsPage.css';
import Header from '../../components/Header/Header';
import EmptyIndicator from '../../components/EmptyIndicator/EmptyIndicator';
import JogsList from '../../components/JogsList/JogsList';
import addIcon from '../../images/add.svg';
import { DateProvider } from '../../context/dateContext'; 
import ApiService from '../../apiService/ApiService';
import {loadJogs} from '../../actions/actions';
import { bindActionCreators } from 'redux';

class JogsPage extends Component {
    state = {
        dateFrom: null,
        dateTo: null,
        isFiltered: false,
    }

    onChangeDateTo = (date) => {
        this.setState({
            dateTo: date, 
            isFiltered: true,
        }) 
    };
    onChangeDateFrom = (date) => {
        this.setState({
            dateFrom: date, 
            isFiltered: true,
        });
    };
    onJogsFilter = (currentUserId, jogsList) => {
        const jogsCurrentUser = [];
        jogsList.map((item) => {
            if(currentUserId == item.user_id) {
                jogsCurrentUser.push(item); 
            }
        })
        this.props.loadJogs(jogsCurrentUser);
        console.log(this.props.jogs);
    }
    async componentDidMount() {
        const apiService = new ApiService();
        const token = JSON.parse(localStorage.getItem('token'));
        try {
            const currentUser = await apiService.getCurrentUser(token);
            const jogs = await apiService.getJogs(token);
            const currentUserId = currentUser.response.id;
            const jogsList = jogs.response.jogs;
            this.onJogsFilter(currentUserId, jogsList);
        } catch (error) {
            console.log(error);
        } 
    } 
    render() {
        const {jogs, currentUserId} = this.props;
        const {dateTo, dateFrom, isFiltered} = this.state;
        const view =  jogs.length ? <JogsList dateTo={dateTo} dateFrom={dateFrom} isFiltered = {isFiltered}/> : <EmptyIndicator />;
        const classBtnAdd = jogs.length ? 'jogsPage__btnAdd_circle' : 'jogsPage__btnAdd_long';
        const fullClassBtnAdd = classBtnAdd + ' jogsPage__btnAdd';
        const valueBtnAdd = jogs.length ? <img src={addIcon} alt='Add'/> :  'Create your jog first';
        const providerProps = {
            onChangeDateTo: this.onChangeDateTo,
            onChangeDateFrom: this.onChangeDateFrom,
            dateTo, 
            dateFrom,
        };
        return (
            <DateProvider value={providerProps}>
                <div className='jogsPage'>
                    <Header/>
                    {view} 
                    <div className={fullClassBtnAdd}>    
                        <Link to='/authentication'>{valueBtnAdd}</Link>
                    </div>
                </div>
            </DateProvider>
        );
    }
}
const mapStateToProps = ({jogs}) => {
    return {
        jogs,
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loadJogs,
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(JogsPage);