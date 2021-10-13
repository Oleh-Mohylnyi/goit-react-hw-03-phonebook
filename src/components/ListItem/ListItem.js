import React, { Component } from "react";
import s from './listItem.module.scss'
import PropTypes from 'prop-types'

export default class ListItem extends Component {
    
    deleteItem = (id) => {
        this.props.deleteContact(id)
        if (this.props.filtredContacts.length < 2) {
            this.props.changeCheckbox(false)
        }
    }

    
    render() {
        let classNameBtn = 'btn_delete'
        if (!this.props.checboxForEdit) {
        classNameBtn += ' hidden'
        }
        
        return (
            <>
            {this.props.filtredContacts.map((contact) => (
                <li
                    key={contact.id}
                    style={this.props.filtredContacts.indexOf(contact) % 2 !== 0
                        ? { backgroundColor: 'transparent' }
                        : { backgroundColor: 'white' }}
                    className={s.item}>
                    <div className={s.contactSpan}>
                    <span>{contact.name} </span>
                    <span>{contact.number} </span>
                    </div>
                    <button
                        type="button"
                        className={classNameBtn}
                        onClick={() => this.deleteItem(contact.id)}>
                        Delete
                    </button>
                </li> )) }
            </>)
    }   
}
    
ListItem.defaultProps = {
    // filtredContacts: {},
    // deleteContact: () => { },
    changeCheckbox: () => { },
}

ListItem.propTypes = {
    changeCheckbox: PropTypes.func,
    // deleteContact: PropTypes.func,
    // filtredContacts: PropTypes.arrayOf(
    //     PropTypes.shape({
    //         id: PropTypes.string,
    //         name: PropTypes.string,
    //         number: PropTypes.string
    //     }))
    }