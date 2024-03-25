import React, { useContext, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Context from "../../store/cart-context";
import "./Listofexpense.css";
import Table from "react-bootstrap/Table";

const Listofexpense = (props) => {
  const contxt = useContext(Context);
  const reloading = contxt.reload;

  const [renderdata, setrenderdata] = useState([]);
  const expenselist = contxt.expenselist;
  console.log(expenselist);
  const firebasedata = [];
  const editbuttonhandler = (expense) => {
    contxt.editelementfunction(expense);
  };
  const deletebuttonhandler = async (expense) => {
    try {
      const response = await fetch(
        `https://expensetracker-c084c-default-rtdb.firebaseio.com/expenses/${expense.id}.json`,
        {
          method: "DELETE",

          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      contxt.reloadfunction(response);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    const useeffectfunction = async () => {
      try {
        const response = await fetch(
          "https://expensetracker-c084c-default-rtdb.firebaseio.com/expenses.json"
        );
        const data = await response.json();
        for (const key in data) {
          firebasedata.push({
            enterdcategory: data[key].enterdcategory,
            enterddescription: data[key].enterddescription,
            enterdmoneyspend: data[key].enterdmoneyspend,
            id: key,
          });
        }

        setrenderdata(firebasedata);
      } catch (error) {
        console.error(error);
      }
    };
    useeffectfunction();
    // eslint-disable-next-line
  }, [reloading]);

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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {renderdata.map((expense, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{expense.enterdcategory}</td>
                <td>{expense.enterddescription}</td>
                <td>{expense.enterdmoneyspend}</td>
                <td>
                  <Button
                    variant="primary"
                    className="me-2"
                    onClick={() => editbuttonhandler(expense)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => deletebuttonhandler(expense)}
                  >
                    {" "}
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
            {expenselist.map((expense, index) => (
              <tr key={index + renderdata.length}>
                <td>{renderdata.length + index}</td>
                <td>{expense.enterdcategory}</td>
                <td>{expense.enterddescription}</td>
                <td>{expense.enterdmoneyspend}</td>
                <td>
                  <Button
                    variant="primary"
                    className="me-2"
                    onClick={() => editbuttonhandler(expense)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => deletebuttonhandler(expense)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </React.Fragment>
  );
};

export default Listofexpense;
