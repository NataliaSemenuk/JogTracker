import React, { Component } from 'react';
import {connect} from 'react-redux';
import './JogsPage.css';
import Header from '../../components/Header/Header';
import EmptyIndicator from '../../components/EmptyIndicator/EmptyIndicator';
import JogsList from '../../components/JogsList/JogsList';
import addIcon from '../../images/add.svg';
import Modal from '../../components/Modal/Modal';

class JogsPage extends Component {
    state = {
        isModelOpen: false,
    }
    toggleModal = () => {
        this.setState((state) => ({
            isModelOpen: !state.isModelOpen,
        }));
    }
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
                <button onClick={this.toggleModal} className={fullClassBtnAdd}>    
                    {valueBtnAdd}
                </button>
                {this.state.isModelOpen && 
                    <Modal onClose={this.toggleModal}/>
                }
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