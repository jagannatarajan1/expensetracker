import React, { useState } from "react";
import Context from "./cart-context";
const Contextprovider = (props) => {
  const [token, settoken] = useState("");
  const useLogin = !!token;
  const loginHandler = (data) => {
    settoken(data.idToken);
    console.log(data);
    localStorage.setItem("IdToken", JSON.stringify(data.idToken));
  };
  const loginid = localStorage.getItem("IdToken");
  // eslint-disable-next-line
  const log = loginid.replace(/\"/g, "");
  // console.log(log);
  const ecomdata = {
    login: loginHandler,
    logintoken: log,
    UserLogIn: useLogin,
  };
  console.log(ecomdata);
  return <Context.Provider value={ecomdata}>{props.children}</Context.Provider>;
};
export default Contextprovider;