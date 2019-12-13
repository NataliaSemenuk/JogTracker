import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import './ModalNavbar.css';
import logo from '../../images/logo-green/logo@3x.png';
import cancelIcon from '../../images/cancel-gray.svg';


class ModalNavbar extends Component {
    state = {
        isMenuClose: true,
    }
    toggleMenu = () => {
        console.log('123');
        const {isMenuClose} = this.state;
        if(isMenuClose) {
            this.setState({
                isMenuClose: false,
            });
        } else {
            this.setState({
                isMenuClose: true,
            });
        }
    }
    render() {
        return <Fragment>
            {
                this.state.isMenuClose &&
                <div className='modalMenu'>
                    <div className='modalMenuHeader'>
                        <div>   
                            <img src={logo} className='logo'/>
                        </div>
                        <div className='toggleModalNavbar' onClick={this.toggleMenu}>
                            <img src={cancelIcon} ></img>
                        </div>
                    </div>
                    <nav>
                        <ul className = 'modalNavbar'>
                            <li className = 'modalNavbar__item'>
                                <Link to='/jogs'>jogs</Link>
                            </li>
                            <li className = 'modalNavbar__item'>
                                <Link to='/info'>info</Link>
                            </li>
                            <li className = 'modalNavbar__item'>
                                <Link to='/'>contact us</Link>
                            </li>
                        </ul>
                    </nav>
                    </div>
                }
                </Fragment>
    }
}
export default ModalNavbar;