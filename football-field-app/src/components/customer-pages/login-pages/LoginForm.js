import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import Header from "../../layout/Header";
import LoginGmail from "./LoginGmail";
// import LogOutGmail from './components/customer-pages/login-pages/LogOutGmail';
import { gapi } from 'gapi-script';


const clientId = '823352207721-5tf63moc8327k22nf7vim28el6cbg5ca.apps.googleusercontent.com'


const LoginForm = () => {
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = {
    uname: "Username không hợp lệ",
    pass: "Password không hợp lệ"
  };

  const database = [
    {
      username: "admin",
      password: "admin"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );



  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  //hanlde GMAIL 
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2', start);
  });


  function handleLogout() {
    setIsSubmitted(false);
    setUname('');
  }

  let navigate = useNavigate();
  const handleTransform = () => {
    navigate('/');
  };

  // const handleTransformRegiter = () => {
  //   navigate('/register');
  // };

  const renderForm = (
    <Container fluid id="bg-login">
      <Row className="justify-content-md-center login-form">
        <Col xs={12} sm={8} md={6}>
          <h1 id="header-title">Login</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label><b>User name</b></Form.Label>
              <Form.Control
                type="text"
                placeholder="User name"
                name="uname"
                value={uname}
                onChange={(event) => setUname(event.target.value)}
                required
              />
              <b className="error">{renderErrorMessage("uname")}</b>
            </Form.Group>
            <br></br>

            <Form.Group controlId="formBasicPassword">
              <Form.Label><b>Password</b></Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="pass"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              <b className="error">{renderErrorMessage("pass")} </b>
            </Form.Group>

            <Button className="btn-login" variant="primary" type="submit">
              Login
            </Button>
            {/* <Button onClick={handleTransformRegiter} className="btn-login" variant="secondary" type="button">
              Sign up
            </Button> */}
          </Form>
            <div className="social-login">
              <LoginGmail />
            </div>

        </Col>
      </Row>
    </Container>
  )

  return (
    <>
      {isSubmitted ? handleTransform() : renderForm}
    </>
  )

}

export default LoginForm;

