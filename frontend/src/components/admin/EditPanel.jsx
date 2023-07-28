import React from 'react'
import axios from 'axios'

import { ReactComponent as EditIcon } from '../../assets/svg/edit.svg'
import { ReactComponent as DeleteIcon } from "../../assets/svg/delete.svg"
import { ReactComponent as PowerIcon } from "../../assets/svg/power.svg"
import Form from '../form/Form'

const EditPanel = ({ onClose, showForm, onDeleteItem, item }) => {
    async function power_panel(e, panel_id) {
        e.stopPropagation();
        const access_token = sessionStorage.getItem("access_token");
        var disable_panel = (await axios.post("/disable_panel", { access_token, panel_id })).data;
        var panels = (await axios.post("/get_panels", { access_token })).data;
        sessionStorage.setItem("panels", JSON.stringify(panels));
    }

    const formFields = [
        { label: "Name", type: "text", id: "panel_name", name: "name" },
        { label: "Username", type: "text", id: "panel_username", name: "username" },
        { label: "Password", type: "text", id: "panel_password", name: "password" },
        { label: "Panel Url", type: "text", id: "panel_url", name: "panel_url" },
        { label: "Capacity", type: "number", id: "panel_user_max_count", name: "capacity" },
        { label: "Traffic", type: "number", id: "panel_traffic", name: "traffic" },
        { label: "Country", type: "text", id: "country", name: "country" }
    ]

    const primaryButtons = [
        { label: "Cancel", className: "outlined", onClick: onClose },
        { label: "Edit Panel", className: "primary", onClick: onClose },
    ]

    const secondaryButtons = [
        { icon: <DeleteIcon />, label: "Delete", className: "ghosted", onClick: (e) => onDeleteItem(e, item.id) },
        { icon: <PowerIcon />, label: "Power", className: "ghosted", onClick: power_panel },
    ]

    return (
        <Form
            onClose={onClose}
            showForm={showForm}
            title="Edit panel"
            iconComponent={<EditIcon />}
            primaryButtons={primaryButtons}
            secondaryButtons={secondaryButtons}
            formFields={formFields}
            item={item}
        />
    )
}

export default EditPanel