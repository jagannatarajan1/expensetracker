import React, { useState } from "react";
import Context from "./cart-context";
const Contextprovider = (props) => {
  const [token, settoken] = useState("");
  const [addexpenselist, setaddexpenselist] = useState([]);
  const useLogin = !!token;
  const loginHandler = (data) => {
    settoken(data.idToken);
    console.log(data);
    localStorage.setItem("IdToken", JSON.stringify(data.idToken));
  };
  const expenselisthandler = async (props) => {
    try {
      const response = await fetch(
        "https://expensetracker-c084c-default-rtdb.firebaseio.com/expenses.json",
        {
          method: "POST",
          body: JSON.stringify({ props }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        setaddexpenselist([...addexpenselist, props]);
      }
      const data = await response.json();

      console.log(data);
    } catch (error) {
      alert(error);
    }
  };
  const loginid = localStorage.getItem("IdToken");
  // eslint-disable-next-line
  const log = loginid.replace(/\"/g, "");
  // console.log(log);
  const ecomdata = {
    login: loginHandler,
    logintoken: log,
    UserLogIn: useLogin,
    expenselist: addexpenselist,
    expenselistfunction: expenselisthandler,
  };
  console.log(ecomdata);
  return <Context.Provider value={ecomdata}>{props.children}</Context.Provider>;
};
export default Contextprovider;
