import React, { Component } from 'react';
import {connect} from 'react-redux';
import JogsItem from '../JogsItem/JogsItem';
import './JogsList.css';

class JogsList extends Component {
    render() {
        const {jogs} = this.props;
        return (
            <ul className = 'jogsList'>
            {
                jogs.map((item) => (
                    <li key = {item.id}>
                        <JogsItem item={item}/>
                    </li>
                )) 
            }</ul>
        );

    }
}
const mapStateToProps = ({jogs}) => {
    return {
        jogs,
    }
}
export default connect(mapStateToProps)(JogsList);