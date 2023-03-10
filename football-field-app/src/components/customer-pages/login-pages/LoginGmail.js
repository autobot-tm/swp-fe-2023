import React, { useState, createContext } from "react";
import GoogleLogin from "react-google-login";
import LogOutGmail from "./LogOutGmail";
import { useNavigate } from 'react-router-dom';

const clientId = '823352207721-5tf63moc8327k22nf7vim28el6cbg5ca.apps.googleusercontent.com'
// export const UserContext = createContext();

// function UserProvider ({props}) {
//   const user = this.props.user;
//   console.log(user);
// }

function LoginGmail() {
  const [isSignIn, setIsSignIn] = useState(false);
  const [userInfo, setUserInfo] = useState({ tokenId: '', name: '', email: '', photo: '' });

  const user = { name: userInfo.name, email: userInfo.email, photo: userInfo.photo };

  const StatusGoogle = (props) => {
    let code;
    if (isSignIn === false) code = <BtnGoogle />
    else {
      code = (
        <LogOutGmail />
      )
    }
    return (code);
  };

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    // console.log(res);
    setIsSignIn(true);
    setUserInfo({
      tokenId: res.tokenId,
      name: res.profileObj.name,
      email: res.profileObj.email,
      photo: res.profileObj.imageUrl
    })
  };

  const onFailure = (res) => {
    // console.log(res);
    setIsSignIn(false);
    setUserInfo({ tokenId: '', name: '', email: '' })
  };

  const BtnGoogle = () => {
    return (
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    );
  };

  return (
    <>
      <StatusGoogle />
    </>
  );
};

export default LoginGmail;
