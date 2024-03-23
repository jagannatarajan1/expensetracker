import React from "react";
const Context = React.createContext({
  login: (token) => {},
  logintoken: "",
  UserLogIn: false,
  expenselistfunction: (expense) => {},
  expenselist: [],
});
export default Context;
