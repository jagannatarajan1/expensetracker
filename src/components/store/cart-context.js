import React from "react";
const Context = React.createContext({
  login: (token) => {},
  logintoken: "",
  UserLogIn: false,
});
export default Context;
