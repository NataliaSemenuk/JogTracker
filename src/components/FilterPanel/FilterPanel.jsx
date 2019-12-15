import React from 'react';
import './FilterPanel.css';
import DatePicker from 'react-date-picker';
import { DateConsumer } from '../../context/dateContext'; 

const FilterPanel = () => {
    return (
        <DateConsumer>
        {
            ({onChangeDateTo, onChangeDateFrom, dateTo, dateFrom}) => {
                const dateToString = Object.keys(dateTo).length ? String(dateTo) : '';
                const dateFromString = Object.keys(dateFrom).length ? String(dateFrom) : '';
                return (
                    <div className='filterPanel'>
                        <div className='dateForm'>
                            <time className='dateForm__label'>Date from</time>
                            <DatePicker 
                                onChange={onChangeDateFrom}
                                value={dateFromString}
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
                                onChange={onChangeDateTo}
                                value={dateToString}
                                calendarIcon={null}
                                clearIcon={null}
                                dayPlaceholder=''
                                monthPlaceholder=''
                                yearPlaceholder=''
                                className='dateForm__input'
                            />
                        </div>
                    </div>
                )
            }
        }
        </DateConsumer>
    );   
}
export default FilterPanel;