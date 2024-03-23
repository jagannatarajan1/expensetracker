import React, { useContext, useRef } from "react";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Context from "../../store/cart-context";
const Formforexpensetracker = () => {
  const contxt = useContext(Context);
  const moneyspend = useRef();
  const description = useRef();
  const category = useRef();
  const expensetrackerhandler = (event) => {
    event.preventDefault();
    const enterdmoneyspend = moneyspend.current.value;
    const enterddescription = description.current.value;
    const enterdcategory = category.current.value;
    const enterdexpese = {
      enterdmoneyspend,
      enterddescription,
      enterdcategory,
    };
    contxt.expenselistfunction(enterdexpese);
    // console.log(enterdexpese);
  };
  return (
    <Container className="w-50">
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Enter the money you spend</Form.Label>
          <Form.Control type="number" placeholder="1000" ref={moneyspend} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Enter the description of the expense</Form.Label>
          <Form.Control
            type="text"
            placeholder="describe the expense"
            ref={description}
          />
        </Form.Group>
        <Form.Group controlId="formGridcategory">
          <Form.Label>category</Form.Label>
          <Form.Select defaultValue="Food" ref={category}>
            <option>Food</option>
            <option>Petrol</option>
            <option>Salary</option>
            <option>Rent</option>
            <option>Gym membership</option>
          </Form.Select>
        </Form.Group>
        <Button className="mt-3" onClick={expensetrackerhandler}>
          Add Expense
        </Button>
      </Form>
    </Container>
  );
};
export default Formforexpensetracker;
