import { Button } from "react-bootstrap";
import React, { useRef } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const LoginForm = () => {
  const email = useRef();
  const password = useRef();
  const confirmpassword = useRef();
  const formhandler = (event) => {
    event.preventDefault();
    const enterdemail = email.current.value;
    const enteredpassword = password.current.value;
    const enterdconfirmpassword = confirmpassword.current.value;
    if (enteredpassword !== enterdconfirmpassword) {
      alert("enterdpassword is different from confirm password");
    } else {
      console.log(enterdemail);
      console.log(enteredpassword);
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBc0lCG-mS1XwpGRxe_FQ3xt9ZTzSwTEmw",
        {
          method: "POST",
          body: JSON.stringify({
            email: enterdemail,
            password: enteredpassword,
            returnSecureToken: true,
          }),

          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          res.json().then((data) => {
            console.log(data);
          });
        })
        .catch((error) => console.log(error));
    }
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
          <Button onClick={formhandler}>Login In</Button>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default LoginForm;
