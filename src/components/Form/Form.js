import React, { Component } from "react"
import s from './form.module.scss'
import PropTypes from 'prop-types'

export default class Form extends Component {
    state = {
        name: '',
        number: ''
    }
    
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        const {name, number} = this.state
        this.props.saveForm(name, number)
        this.setState({ name: '', number: ''})
        }

    render() {
        const {name, number} = this.state
        return (
            <form className={s.form}>
                <label className={s.label}> Name
                <input
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  required
                  autoComplete="off"
                  onChange = {this.handleChange}
                  value={name}
                  className={s.input}
                />
                </label>
                <br/>
                <label className={s.label}> Number
                <input
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                  required
                  autoComplete="off"
                  onChange = {this.handleChange}
                  value={number}
                  className={s.input}
                />
                </label>
                <br/>
                <button
                    type="submit"
                    className={s.btn}
                    onClick = {this.handleSubmit}>
                    Add contact
                </button>
                
            </form>
        )
    }
}

Form.defaultProps = {
    handleChange: () => { },
    handleSubmit: () => { }
}

Form.propTypes = {
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
}