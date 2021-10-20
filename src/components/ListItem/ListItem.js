import React from "react";
import s from './listItem.module.scss'
import PropTypes from 'prop-types'

export default function ListItem({
    filtredContacts,
    deleteContact,
    changeCheckbox,
    statusCheckbox }) {
    
    const deleteItem = (id) => {
        deleteContact(id)
        if (filtredContacts.length < 2) {
            changeCheckbox(false)
        }
    }

    let classNameBtn = 'btn_delete'
    if (!statusCheckbox) {
        classNameBtn += ' hidden'
    }
        
    return (
        <>
            {filtredContacts.map((contact) => (
                <li
                    key={contact.id}
                    style={filtredContacts.indexOf(contact) % 2 !== 0
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
                        onClick={() => deleteItem(contact.id)}>
                        Delete
                    </button>
                </li>))}
        </>)
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