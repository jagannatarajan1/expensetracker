import React, { useState } from "react";
import Context from "./cart-context";
const Contextprovider = (props) => {
  const initialvalue = localStorage.getItem("IdToken");
  const [token, settoken] = useState(initialvalue);
  const [updatreload, setupdatereload] = useState("");
  const [addexpenselist, setaddexpenselist] = useState([]);
  const [editlist, seteditlist] = useState("");
  const editactive = !!editlist;
  const useLogin = !!token;
  const editelementhandler = (expense) => {
    seteditlist(expense);
  };
  const reloadhandler = (props) => {
    setupdatereload(props);
  };
  const loginHandler = (data) => {
    settoken(data.idToken);
    localStorage.setItem("IdToken", JSON.stringify(data.idToken));
  };
  const expenselisthandler = async (props) => {
    if (editactive) {
      try {
        console.log("Editing expense:", props);
        await fetch(
          `https://expensetracker-c084c-default-rtdb.firebaseio.com/expenses/${props.id}.json`,
          {
            method: "PUT",
            body: JSON.stringify({
              enterdcategory: props.enterdcategory,
              enterddescription: props.enterddescription,
              enterdmoneyspend: props.enterdmoneyspend,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setupdatereload(props);

        seteditlist("");
      } catch (error) {
        alert(error);
      }
    }

    if (!editactive) {
      try {
        const response = await fetch(
          "https://expensetracker-c084c-default-rtdb.firebaseio.com/expenses.json",
          {
            method: "POST",
            body: JSON.stringify({
              enterdcategory: props.enterdcategory,
              enterddescription: props.enterddescription,
              enterdmoneyspend: props.enterdmoneyspend,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response);
        const data = await response.json();
        props = { ...props, id: data.name };
        if (response.ok) {
          setaddexpenselist([...addexpenselist, props]);
        }
      } catch (error) {
        alert(error);
      }
    }
  };

  const loginid = localStorage.getItem("IdToken");
  // eslint-disable-next-line
  const log = loginid.replace(/\"/g, "");
  const ecomdata = {
    login: loginHandler,
    logintoken: log,
    UserLogIn: useLogin,
    expenselist: addexpenselist,
    expenselistfunction: expenselisthandler,
    editelementfunction: editelementhandler,
    editelement: editlist,
    reloadfunction: reloadhandler,
    reload: updatreload,
  };
  console.log(ecomdata);
  return <Context.Provider value={ecomdata}>{props.children}</Context.Provider>;
};
export default Contextprovider;
