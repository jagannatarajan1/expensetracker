import React from "react";
const Context = React.createContext({
  login: (token) => {},
  logintoken: "",
  UserLogIn: false,
  expenselistfunction: (expense) => {},
  expenselist: [],
  editelementfunction: (expense) => {},
  editelement: [],
  reload: "",
  reloadfunction: (props) => {},
});
export default Context;
