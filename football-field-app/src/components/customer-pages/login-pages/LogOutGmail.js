import React from 'react'
import { GoogleLogout } from 'react-google-login'

const clientId = '823352207721-5tf63moc8327k22nf7vim28el6cbg5ca.apps.googleusercontent.com'

function LogOutGmail() {
    const onSuccess = () => {
        alert('Logout made successfully');
    };

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            >
            </GoogleLogout>
        </div>
    )
}

export default LogOutGmail