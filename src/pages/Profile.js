import React, { useContext, useRef } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { AiFillGithub } from "react-icons/ai";
import { PiGlobe } from "react-icons/pi";
import Context from "../components/store/cart-context";

const Profile = (props) => {
  const fullname = useRef();
  const profilepictureUrl = useRef();
  const contxt = useContext(Context);
  const FormsubmitHandler = async (event) => {
    event.preventDefault();
    const enteredfullname = fullname.current.value;
    const enteredprofilepictureUrl = profilepictureUrl.current.value;
    console.log(enteredfullname, enteredprofilepictureUrl, contxt.logintoken);
    console.log(contxt);
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBc0lCG-mS1XwpGRxe_FQ3xt9ZTzSwTEmw",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: contxt.logintoken,
            displayName: enteredfullname,
            photoUrl: enteredprofilepictureUrl,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update profile");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <React.Fragment>
      <Navbar className="bg-body-tertiary border-bottom border-dark border-1">
        <Container>
          <Navbar.Brand>Winners never Quite, Quitter never Win</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <div className="bgprofilecolor">
              <Navbar.Text>
                Your profile is 64% completed. A complete Profile has higher
                chances of landing a job. <NavLink to="/">Complete Now</NavLink>
              </Navbar.Text>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="m-5">
        <div className="d-flex justify-content-between">
          <h2>Contact Details</h2>
          <Button variant="outline-danger">Cancel</Button>
        </div>
        <Form className="m-5">
          <Row className="align-items-center">
            <Col md={6}>
              <div className="d-flex align-items-center">
                <AiFillGithub size={50} />
                <p className="mt-3 me-2">Full Name:</p>

                <div>
                  <Form.Control placeholder="Full name" ref={fullname} />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="d-flex align-items-center">
                <PiGlobe size={50} />
                <p className="mt-3 me-2">Profile Photo Url:</p>

                <div>
                  <Form.Control
                    placeholder="Enter the profile picture URL"
                    ref={profilepictureUrl}
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Button
            className="mt-3"
            variant="primary"
            onClick={FormsubmitHandler}
          >
            Update
          </Button>
        </Form>
      </Container>
    </React.Fragment>
  );
};

export default Profile;