import React, {Component} from 'react';
import './FilterPanel.css';
import DatePicker from 'react-date-picker';

class FilterPanel extends Component {
    state = {
        dateTo: '',
        dateFrom: '',
    }
    onChangeDateTo = (dateTo) => this.setState({ dateTo });
    onChangeDateFrom = (dateFrom) => this.setState({ dateFrom });
    render() {
        return (
            <div className='filterPanel'>
                <div className='dateForm'>
                    <time className='dateForm__label'>Date from</time>
                    <DatePicker 
                        onChange={this.onChangeDateTo}
                        value={this.state.dateTo}
                        maxDate={this.state.dateFrom}
                        calendarIcon={null}
                        clearIcon={null}
                        dayPlaceholder=''
                        monthPlaceholder=''
                        yearPlaceholder=''
                        className='dateForm__input'
                    />
                </div>
                <div className='dateForm'>
                    <time className='dateForm__label'>Date to</time>
                    <DatePicker 
                        onChange={this.onChangeDateFrom}
                        value={this.state.dateFrom}
                        minDate={this.state.dateTo}
                        calendarIcon={null}
                        clearIcon={null}
                        dayPlaceholder=''
                        monthPlaceholder=''
                        yearPlaceholder=''
                        className='dateForm__input'
                    />
                </div>
            </div>
        );   
    }
}
export default FilterPanel;