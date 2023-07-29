import React, {useState} from 'react'

import Button from '../../components/Button'
import "../admin/AdminSettingsPage.css"
import ErrorCard from '../../components/ErrorCard';

const AdminSettingsPage = () => {
    const [error_msg, setError_msg] = useState("Failed to create panel")
    const [hasError, setHasError] = useState(true)

    return (
        <form autoComplete='off' className="settings-page">
            <div className="modal__form__group">
                <label className="modal__form__label" htmlFor="username">Username</label>
                <input autoComplete='new-username' className="modal__form__input" type="text" id="username" name="username" />
            </div>
            <div className="flex gap-16">
                <div className="modal__form__group">
                    <label className="modal__form__label" htmlFor="password">New Password</label>
                    <input autoComplete='new-password' className="modal__form__input" type="password" id="password" name="password" />
                </div>
                <div className="modal__form__group">
                    <label className="modal__form__label" htmlFor="password">Repeat New Password</label>
                    <input autoComplete='new-password' className="modal__form__input" type="password" id="password" name="password" />
                </div>
            </div>
            <footer className="settings-page__footer">
                <Button className="primary">Save</Button>
            </footer>
            <ErrorCard
                hasError={hasError}
                setHasError={setHasError}
                errorTitle="ERROR"
                errorMessage={error_msg}
            />
        </form>
        
    )
}

export default AdminSettingsPage