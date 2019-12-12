import React, { Component } from 'react';
import {connect} from 'react-redux';
import JogsItem from '../JogsItem/JogsItem';
import EmptyIndicator from '../EmptyIndicator/EmptyIndicator';
import './JogsList.css';

class JogsList extends Component {
    render() {
        const {jogs} = this.props;
        let listItems;

        if (jogs.length) {
            listItems = jogs.map((item) => (
                <li key = {item.id}>
                    <JogsItem item={item}/>
                </li>
            )); 
        } else {
            listItems = <EmptyIndicator />;
        }
        
        return (
            <ul className = 'jogsList'>{listItems}</ul>
        );

    }
}
const mapStateToProps = ({jogs}) => {
    return {
        jogs,
    }
}
export default connect(mapStateToProps)(JogsList);