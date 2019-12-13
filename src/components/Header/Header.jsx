import React, { Fragment, Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
import filterActive from '../../images/filter-active.svg';
import filter from '../../images/filter.svg';
import FilterPanel from '../FilterPanel/FilterPanel';
import menuIcon from '../../images/menu/menu.png';
import ModalNavbar from '../ModalNavbar/ModalNavbar'


class Header extends Component {
    state = {
        isFilterOpen: false,
        isMenuOpen: false,
        iconFilter: filter,
        classBtnFilter: 'btn-filter', 
    }
    toggleFilter = () => {
        const {isFilterOpen} = this.state;
        if(isFilterOpen) {
            this.setState({
                isFilterOpen: false,
                iconFilter: filter,
                classBtnFilter: 'btn-filter',
            });
        } else {
            this.setState({
                isFilterOpen: true,
                iconFilter: filterActive,
                classBtnFilter: 'btn-filter_active',
            });
        }
    }
    toggleMenu = () => {
        const {isMenuOpen} = this.state;
        if(isMenuOpen) {
            this.setState({
                isMenuOpen: false,
            });
        } else {
            this.setState({
                isMenuOpen: true,
            });
        }
    }
    render() {
        const {isHidenOption} = this.props;
        const {iconFilter, classBtnFilter, classFilterPanel} = this.state;
        return (
            <div>
                <header className = 'header'>
                    <div>
                        <img src={logo} className='logo'/>
                    </div>
                    { !isHidenOption &&
                        <div className='headerOptions'>
                            <nav>
                                <ul className = 'navbar'>
                                    <li className = 'navbar__item'>
                                        <Link to='/jogs'>jogs</Link>
                                    </li>
                                    <li className = 'navbar__item'>
                                        <Link to='/info'>info</Link>
                                    </li>
                                    <li className = 'navbar__item'>
                                        <Link to='/'>contact us</Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className='toggleFilter' onClick={this.toggleFilter}>
                                <img src={iconFilter} className={classBtnFilter}></img>
                            </div>
                            <div className='toggleMenu' onClick={this.toggleMenu}>
                                <img src={menuIcon} />
                            </div>
                        </div>
                    }
                </header>
                { this.state.isMenuOpen && 
                    <ModalNavbar />
                }
                { this.state.isFilterOpen && 
                    <FilterPanel classFilterPanel={classFilterPanel}/>
                }
            </div>
        );
    }
}
export default Header;