import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import iconCancel from '../../images/cancel.svg';
import './Modal.css';

class Modal extends Component {
    // componentWillMount(){
    //     this.root = document.createElement('div');
    //     this.root.className = "modalPage";
    //     document.body.appendChild(this.root);
    // }
    // componentWillUnmount() {
    //     document.body.removeChild(this.root);   
    // }
    render() {
        const {onClose} = this.props;
        const distance = 'distance';
        const time = 'time';
        const data = 'data';
        
        return (
                <div className = 'modal'>
                    <div className='modal__btnClose' onClick={onClose}>
                        <img src={iconCancel}/>
                    </div>
                    <div className='modalForm'>
                        <label className='modalForm__label'>{distance}</label>
                        <input className='modalForm__input'/>
                    </div>
                    <div className='modalForm'>
                        <label className='modalForm__label'>{time}</label>
                        <input className='modalForm__input'/>
                    </div>
                    <div className='modalForm'>
                        <label className='modalForm__label'>{data}</label>
                        <input className='modalForm__input'/>
                    </div>
                    <input className='modal__btnSave' type='button' value='save'></input>
                </div>
        );
    }
}
export default Modal;