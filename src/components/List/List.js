import React, {Component} from "react"
import ListItem from "../ListItem/ListItem"
import s from './list.module.scss'
import PropTypes from 'prop-types'

export default class List extends Component {
    state = {
        edit: false
    }

    handleCheckbox = (e) => {
        this.setState({ edit: e.target.checked })
    }

    changeCheckbox = (status) => {
        this.setState({ edit: status })
    }

    render() {
        const {edit} = this.state
        let classNameCheckbox = 'checkboxEdit'
        if (edit) {
        classNameCheckbox += ' checkboxEditActive'
        }
        const {filtredContacts, deleteContact} = this.props

        return (
            <div className={s.contactsList}>
                {filtredContacts.length > 0
                    ? (<label
                        className={classNameCheckbox}>
                        Edit
                        <input
                        type="checkbox"
                            className={s.hidden}
                            checked={edit}
                            onChange={this.handleCheckbox}
                        />
                        </label>)
                    : null
                }    
                <ul className={s.list}>
                    <ListItem
                        filtredContacts={filtredContacts}
                        changeCheckbox={this.changeCheckbox}
                        checboxForEdit={edit}
                        deleteContact={deleteContact}
                    />
                </ul>
            </div>
        )
    }
}

List.defaultProps = {
    filtredContacts: {},
    deleteContact: () => { },
}

List.propTypes = {
    deleteContact: PropTypes.func,
    filtredContacts: PropTypes.array
    }