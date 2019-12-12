import React from 'react';
import './FilterPanel.css';

const FilterPanel = ({classFilterPanel}) => {
    const classNameFilterPanel = 'filterPanel ' + classFilterPanel;
    return (
        <div className={classNameFilterPanel}>
            <div className='filterPanel-form'>
                <label className='filterPanel-form__label'>Date from</label>
                <input type='date' className='filterPanel-form__input'></input>
            </div>
            <div className='filterPanel-form'>
                <label className='filterPanel-form__label'>Data to</label>
                <input type='date' className='filterPanel-form__input'></input>
            </div>
        </div>
    );
}
export default FilterPanel;