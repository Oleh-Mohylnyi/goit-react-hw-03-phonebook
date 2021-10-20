import React from "react";
import s from './filter.module.scss'
import PropTypes from 'prop-types'

export default function Filter ({handleChange, filter=''}) {

    return (
        <label className={s.label}>
            Find contacts by name 
        <input
            type="text"
            name="filter"
            className={s.input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            autoComplete="off"
            onChange = {handleChange}
            value = {filter}>
        </input>
        </label>
    )
}

Filter.propTypes = {
    handleChange: PropTypes.func,
    filter: PropTypes.string,
}