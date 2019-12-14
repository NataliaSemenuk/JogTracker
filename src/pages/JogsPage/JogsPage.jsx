import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './JogsPage.css';
import Header from '../../components/Header/Header';
import EmptyIndicator from '../../components/EmptyIndicator/EmptyIndicator';
import JogsList from '../../components/JogsList/JogsList';
import addIcon from '../../images/add.svg';

class JogsPage extends Component {

    render() {
        const {jogs} = this.props;
        const view = jogs.length ? <JogsList/> : <EmptyIndicator />;
        const classBtnAdd = jogs.length ? 'jogsPage__btnAdd_circle' : 'jogsPage__btnAdd_long';
        const fullClassBtnAdd = classBtnAdd + ' jogsPage__btnAdd';
        const valueBtnAdd = jogs.length ? <img src={addIcon}/> : 'Create your jog first';
        return (
            <div className='jogsPage'>
                <Header/>
                {view} 
                <div className={fullClassBtnAdd}>    
                    <Link to='/authentication'>{valueBtnAdd}</Link>
                </div>

            </div>
        );
    }
}
const mapStateToProps = ({jogs}) => {
    return {
        jogs,
    }
}
export default connect(mapStateToProps)(JogsPage);