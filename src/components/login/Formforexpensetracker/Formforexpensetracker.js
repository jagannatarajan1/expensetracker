import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Context from "../../store/cart-context";

const Formforexpensetracker = () => {
  const contxt = useContext(Context);
  const edit = contxt.editelement;
  console.log(edit);

  const [updatemoney, setupdatemoney] = useState("");
  const [updatecategory, setupdatecategory] = useState("Food");

  const [updatedescription, setupdatedescription] = useState("");
  const [updateid, setupdateid] = useState("");
  useEffect(() => {
    if (edit) {
      console.log("kakak");
      setupdatemoney(edit.enterdmoneyspend);
      setupdatecategory(edit.enterdcategory);
      setupdatedescription(edit.enterddescription);
      setupdateid(edit.id);
    }
  }, [edit]);

  const moneyhandler = (event) => {
    setupdatemoney(event.target.value);
  };

  const categoryhandler = (event) => {
    setupdatecategory(event.target.value);
  };

  const descriptionhandler = (event) => {
    setupdatedescription(event.target.value);
  };
  console.log(updatemoney, updatecategory, updatedescription);

  const expensetrackerhandler = (event) => {
    event.preventDefault();
    const enterdmoneyspend = updatemoney;
    const enterddescription = updatedescription;
    const enterdcategory = updatecategory;
    const id = updateid;
    const enterdexpese = {
      enterdmoneyspend,
      enterddescription,
      enterdcategory,
      id,
    };

    contxt.expenselistfunction(enterdexpese);
    // if (edit) {
    //   contxt.editelementfunction();
    // }
    console.log("kakak");
    setupdatemoney("");
    setupdatecategory("");
    setupdatedescription("");
  };

  return (
    <Container className="w-50">
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Enter the money you spend</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter the money"
            value={updatemoney}
            onChange={moneyhandler}
          />
        </Form.Group>
        <Form.Group controlId="formGridcategory">
          <Form.Label>Category</Form.Label>
          <Form.Select value={updatecategory} onChange={categoryhandler}>
            <option>Food</option>
            <option>Petrol</option>
            <option>Salary</option>
            <option>Rent</option>
            <option>Gym membership</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Enter the description of the expense</Form.Label>
          <Form.Control
            type="text"
            placeholder="Describe the expense"
            value={updatedescription}
            onChange={descriptionhandler}
          />
        </Form.Group>

        <Button className="mt-3" onClick={expensetrackerhandler}>
          {edit ? "Update Expense" : "Add Expense"}
        </Button>
      </Form>
    </Container>
  );
};

export default Formforexpensetracker;
