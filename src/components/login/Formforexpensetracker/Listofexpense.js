import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Context from "../../store/cart-context";
import "./Listofexpense.css";
import Table from "react-bootstrap/Table";

const Listofexpense = (props) => {
  const contxt = useContext(Context);

  return (
    <React.Fragment>
      <Container className="w-50 mt-4">
        <Table hover>
          <thead>
            <tr>
              <th>Index</th>
              <th>Category</th>
              <th>Description</th>
              <th>Money Spend</th>
            </tr>
          </thead>
          <tbody>
            {contxt.expenselist.map((expense, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{expense.enterdcategory}</td>
                <td>{expense.enterddescription}</td>
                <td>{expense.enterdmoneyspend}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </React.Fragment>
  );
};

export default Listofexpense;
