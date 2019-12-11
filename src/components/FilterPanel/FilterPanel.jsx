import React from 'react';
import './FilterPanel.css';

const FilterPanel = () => {
    return (
        <div className='filterPanel'>
            <div className='filterPanel-form'>
                <label className='filterPanel-form__label'>Date from</label>
                <input className='filterPanel-form__input'></input>
            </div>
            <div className='filterPanel-form'>
                <label className='filterPanel-form__label'>Data to</label>
                <input className='filterPanel-form__input'></input>
            </div>
        </div>
    );
}
export default FilterPanel;