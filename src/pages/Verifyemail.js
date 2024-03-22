import React, { useContext, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Context from "../components/store/cart-context";

function Verifyemail() {
  const [verify, setVerify] = useState(null);
  const contxt = useContext(Context);

  const verifyemailHandler = async () => {
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBc0lCG-mS1XwpGRxe_FQ3xt9ZTzSwTEmw",
        {
          method: "POST",
          body: JSON.stringify({
            requestType: "VERIFY_EMAIL",
            idToken: contxt.logintoken,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setVerify(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="m-5 border pt-5 pb-5">
      {!verify && (
        <div>
          <Row className="text-center pb-2">
            <Col>
              <h6> Please Verify Your Email </h6>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {" "}
            {/* Adjusted */}
            <Col xs="auto">
              <Button onClick={verifyemailHandler}>Click to verify</Button>
            </Col>
          </Row>
        </div>
      )}
      {verify && (
        <Row className="text-center">
          <Col>
            <h6>
              Check your email, you might have received a verification link.
              Click on it to verify.
            </h6>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Verifyemail;
