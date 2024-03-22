import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./Home.css";
import Verifyemail from "./Verifyemail";
const Home = (props) => {
  return (
    <React.Fragment>
      <Navbar className="bg-body-tertiary border-bottom border-dark border-1">
        <Container>
          <Navbar.Brand>Welcome to Expense Tracker!!!</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <div className="bgprofilecolor">
              <Navbar.Text>
                Your profile is Incomplete
                <NavLink
                  to="/yourprofile"
                  style={({ isActive, isPending, isTransitioning }) => {
                    return {
                      padding: isPending ? "1px" : "2px",
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "red" : "blue",
                      viewTransitionName: isTransitioning ? "slide" : "",
                      Hover: "red",
                    };
                  }}
                >
                  Complete Now
                </NavLink>
              </Navbar.Text>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="verify-email-container">
        <Verifyemail />
      </div>
    </React.Fragment>
  );
};
export default Home;
