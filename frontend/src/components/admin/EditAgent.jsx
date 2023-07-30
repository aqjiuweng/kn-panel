import React from 'react'

import { ReactComponent as EditIcon } from '../../assets/svg/edit.svg'
import { ReactComponent as DeleteIcon } from '../../assets/svg/delete.svg'
import { ReactComponent as PowerIcon } from '../../assets/svg/power.svg'
import Form from '../form/Form'

const EditAgent = ({ item, onClose, showForm, onDeleteItem, onPowerItem, onEditItem }) => {

console.log(item)

    const formFields = [
        { label: "Name", type: "text", id: "name", name: "name" },
        { label: "Username", type: "text", id: "username", name: "username" },
        { label: "Password", type: "text", id: "password", name: "password" },
        [
            { label: "Volume", type: "number", id: "volume", name: "volume" },
            { label: "Minimum Volume", type: "number", id: "min_vol", name: "min_vol" },
        ],
        [
            { label: "Maximum Users", type: "number", id: "max_users", name: "max_users" },
            { label: "MaxDays", type: "number", id: "max_days", name: "maxDays" },
        ],
        [
            { label: "Prefix", type: "text", id: "prefix", name: "prefix" },
            { label: "Country", type: "text", id: "country", name: "country" }
        ]
    ]

    const primaryButtons = [
        { label: "Cancel", className: "outlined", onClick: onClose },
        { label: "Edit Agent", className: "primary", onClick: () => onEditItem(
            item.id,
            document.getElementById("name").value,
            document.getElementById("username").value,
            document.getElementById("password").value,
            document.getElementById("volume").value,
            document.getElementById("min_vol").value,
            document.getElementById("max_users").value,
            document.getElementById("max_days").value,
            document.getElementById("prefix").value,
            document.getElementById("country").value,
        )},
    ]

    const secondaryButtons = [
        { icon: <DeleteIcon />, label: "Delete", className: "ghosted", onClick: (e) => onDeleteItem(e, item.id) },
        { icon: <PowerIcon />, label: "Power", className: "ghosted", onClick: () => onPowerItem(item.id,item.disable) },
    ]

    return (
        <Form
            onClose={onClose}
            showForm={showForm}
            title="Edit agent"
            iconComponent={<EditIcon />}
            primaryButtons={primaryButtons}
            secondaryButtons={secondaryButtons}
            formFields={formFields}
            item={item}
        />
    )
}

export default EditAgent