import React from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useGoogleOneTapLogin } from '@react-oauth/google';
import { GoogleLoginButton } from "@react-oauth/google";
import GoogleLogin from "react-google-login";

const clientId = '823352207721-5tf63moc8327k22nf7vim28el6cbg5ca.apps.googleusercontent.com'


// const LoginGmail = () => {
// const onSuccess = (res) => {
//   console.log(res);
// };

// const onFailure = (res) => {
//   console.log(res);
// };


function LoginGmail() {

  const handleLogin = (response) => {
    console.log(response);
    localStorage.setItem("accessToken", response.accessToken);
    localStorage.setItem("email", response.profileObj.email);
    // Redirect to dashboard page
    window.location.href = "/home";
  };

  const handleLoginFailure = (error) => {
    console.error(error);
  };


  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login with Google"
      onSuccess={handleLogin}
      onFailure={handleLoginFailure}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
    />
  );
};

export default LoginGmail;
