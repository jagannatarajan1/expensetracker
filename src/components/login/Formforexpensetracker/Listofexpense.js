import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Context from "../../store/cart-context";
import "./Listofexpense.css";
import Table from "react-bootstrap/Table";

const Listofexpense = (props) => {
  const contxt = useContext(Context);
  const [renderdata, setrenderdata] = useState([]);
  const expenselist = contxt.expenselist;
  const firebasedata = [];

  console.log(contxt);
  console.log(expenselist);
  // if (!expenselist) {
  //   setrenderdata(firebasedata);
  // } else {
  //   setrenderdata(expenselist);
  // }
  useEffect(() => {
    const useeffectfunction = async () => {
      try {
        const response = await fetch(
          "https://expensetracker-c084c-default-rtdb.firebaseio.com/expenses.json"
        );
        // if (response.ok) {
        //   setaddexpenselist([...addexpenselist, props]);
        // }
        const data = await response.json();
        for (const key in data) {
          firebasedata.push({
            enterdcategory: data[key].props.enterdcategory,
            enterddescription: data[key].props.enterddescription,
            enterdmoneyspend: data[key].props.enterdmoneyspend,
          });
        }

        console.log(firebasedata);
        setrenderdata(firebasedata);
      } catch (error) {
        alert(error);
      }
    };
    useeffectfunction();
    // eslint-disable-next-line
  }, []);

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
            {renderdata.map((expense, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{expense.enterdcategory}</td>
                <td>{expense.enterddescription}</td>
                <td>{expense.enterdmoneyspend}</td>
              </tr>
            ))}
            {expenselist.map((expense, index) => (
              <tr key={index}>
                <td>{renderdata.length + index}</td>
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
