import { Button } from "react-bootstrap";

import React, { useContext, useRef, useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./loginForm.css";
import Context from "../store/cart-context";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const nav = useNavigate();
  const contxt = useContext(Context);
  const [login, setlogin] = useState(false);
  // const [redirect, setredirect] = useState(false);
  const email = useRef();
  const password = useRef();
  const confirmpassword = useRef();
  const already = () => {
    setlogin((preState) => !preState);
  };
  const formhandler = (event) => {
    event.preventDefault();
    const enterdemail = email.current.value;
    const enteredpassword = password.current.value;
    if (!login) {
      const enterdconfirmpassword = confirmpassword.current.value;
      if (enteredpassword !== enterdconfirmpassword) {
        alert("enterdpassword is different from confirm password");
        console.log("logggggggggggggg");
      }
    }

    console.log(enterdemail);
    console.log(enteredpassword);
    let url;
    if (login) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBc0lCG-mS1XwpGRxe_FQ3xt9ZTzSwTEmw";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBc0lCG-mS1XwpGRxe_FQ3xt9ZTzSwTEmw";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enterdemail,
        password: enteredpassword,
        returnSecureToken: true,
      }),

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.json().then((data) => {
          console.log(data);
          contxt.login(data);

          // setredirect(true);
          nav("/");
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <React.Fragment>
      <div className="container min-vh-100 d-flex justify-content-center align-items-center">
        <Form className="border ps-5 pt-5 pb-5">
          <Form.Group
            as={Row}
            className="mb-3 w"
            controlId="formPlaintextEmail"
          >
            <Form.Label>Email</Form.Label>
            <Col sm="10">
              <Form.Control placeholder="email@example.com" ref={email} />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label>Password</Form.Label>
            <Col sm="10">
              <Form.Control
                type="password"
                placeholder="Password"
                ref={password}
              />
            </Col>
          </Form.Group>
          {!login && (
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="confirmformPlaintextPassword"
            >
              <Form.Label>Confirm Password</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  ref={confirmpassword}
                />
              </Col>
            </Form.Group>
          )}
          <div className="d-grid gap-4 col-9 mx-3">
            {!login && (
              <Button onClick={formhandler} variant="primary">
                SignUp
              </Button>
            )}
            {login && (
              <Button onClick={formhandler} variant="primary">
                SignIn
              </Button>
            )}
          </div>
        </Form>
      </div>
      <p
        className="already container d-flex justify-content-center "
        onClick={already}
      >
        {login ? "Dont't have an account?SignUp" : "Already have a Account"}
      </p>
    </React.Fragment>
  );
};

export default LoginForm;
