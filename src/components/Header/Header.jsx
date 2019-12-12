import React, { Fragment, Component } from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import filterActive from '../../images/filter-active.svg';
import filter from '../../images/filter.svg';
import FilterPanel from '../FilterPanel/FilterPanel';

class Header extends Component {
    state = {
        showFilter: false,
        iconFilter: filter,
        classBtnFilter: 'btn-filter', 
        classFilterPanel: 'hide',
    }
    onShowHideFilter = () => {
        const {showFilter} = this.state;
        if(showFilter) {
            this.setState({
                showFilter: false,
                iconFilter: filter,
                classBtnFilter: 'btn-filter',
                classFilterPanel: 'hide',
            });
        } else {
            this.setState({
                showFilter: true,
                iconFilter: filterActive,
                classBtnFilter: 'btn-filter_active',
                classFilterPanel: 'show',
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
                    
                    <nav>
                        <ul className = 'header-navbar'>
                            <li className = 'header-navbar__item'>jogs</li>
                            <li className = 'header-navbar__item'>info</li>
                            <li className = 'header-navbar__item'>contact us</li>
                        </ul>
                    </nav>
                    <div onClick={this.onShowHideFilter}>
                        <img src={iconFilter} className={classBtnFilter}></img>
                    </div>
                </header>
                <FilterPanel classFilterPanel={classFilterPanel}/>
            </Fragment>
        );
    }
}
export default Header;