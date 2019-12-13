import React, { Fragment, Component } from 'react';
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
        const {iconFilter, classBtnFilter, classFilterPanel} = this.state;
        return (
            <Fragment>
                <header className = 'header'>
                    <div>
                        <img src={logo} className='logo'/>
                    </div>
                    <div className='headerOptions'>
                        <nav>
                            <ul className = 'navbar'>
                                <li className = 'navbar__item'>jogs</li>
                                <li className = 'navbar__item'>info</li>
                                <li className = 'navbar__item'>contact us</li>
                            </ul>
                        </nav>
                        <div className='toggleFilter' onClick={this.toggleFilter}>
                            <img src={iconFilter} className={classBtnFilter}></img>
                        </div>
                        <div className='toggleMenu' onClick={this.toggleMenu}>
                            <img src={menuIcon} />
                        </div>
                    </div>
                </header>
                { this.state.isMenuOpen && 
                    <ModalNavbar />
                }
                { this.state.isFilterOpen && 
                    <FilterPanel classFilterPanel={classFilterPanel}/>
                }
            </Fragment>
        );
    }
}
export default Header;