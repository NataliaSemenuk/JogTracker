import React, { Component } from 'react';
import {connect} from 'react-redux';
import JogsItem from '../JogsItem/JogsItem';
import './JogsList.css';

class JogsList extends Component {
    render() {
        const {jogs, dateTo, dateFrom, isFiltered} = this.props;
        const dateToNumber = dateTo ? Number(dateTo.valueOf()) : 0;
        const dateFromNumber = dateFrom ? Number(dateFrom.valueOf()) : 0;
        const itemList = (item) => (<li key = {item.id} className='jogsList__item'>
                            <JogsItem item={item}/>
                        </li>);
        const jogsList = jogs.map((item) => {
            return itemList(item);
        });
        const filteredList = jogs.map((item) => {
            if(item.date <= dateToNumber && !isNaN(dateToNumber) && item.date >= dateFromNumber && !isNaN(dateFromNumber)) {
                return itemList(item);
            }
            if(item.date >= dateFromNumber && !isNaN(dateFromNumber) && isNaN(dateToNumber)) {
                return itemList(item);
            }
            if(item.date <= dateToNumber && !isNaN(dateToNumber) && isNaN(dateFromNumber)) {
                return itemList(item);
            }
        });

        const visibleList = !isFiltered ? jogsList : filteredList;
        return (
            <ul className = 'jogsList'>
                {visibleList}
            </ul>
        );
                
    }
}
const mapStateToProps = ({jogs}) => {
    return {
        jogs,
    }
}
export default connect(mapStateToProps)(JogsList);