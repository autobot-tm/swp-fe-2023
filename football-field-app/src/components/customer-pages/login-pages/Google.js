// import React from 'react'

// function Google() {
//     function signOut(googleUser) {
//         auth2.currentUser.auth2.signOut()
        
//     }

//     function signOut() {
//         var auth2 = gapi.auth2.getAuthInstance();
//         auth2.signOut().then(function () {
//             console.log('User signed out.');
//         });
//     }


//     function handleCredentialResponse(response) {
//         // decodeJwtResponse() is a custom function defined by you
//         // to decode the credential response.

//         console.log("ID: " + response.credential);
//     }
//     return (
//         <div>



//             <a href="#" onclick={signOut()}>Sign out</a>


//             <div id="g_id_onload" data-client_id="823352207721-5tf63moc8327k22nf7vim28el6cbg5ca.apps.googleusercontent.com"
//                 data-context="signin" data-ux_mode="popup" data-nonce=""
//                 data-auto_prompt="true" data-callback={handleCredentialResponse}>
//             </div>

//             <div class="g_id_signin" data-type="standard" data-shape="rectangular" data-theme="outline" data-text="signin_with"
//                 data-size="medium" data-logo_alignment="left">
//             </div>
//         </div>
//     )
// }

// export default Google