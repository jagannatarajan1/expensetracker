import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./components/login/loginForm";
import Home from "./pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Context from "./components/store/cart-context";
import Profile from "./pages/Profile";

function App() {
  const contxt = useContext(Context);
  return (
    <React.Fragment>
      <Routes>
        <Route
          path="/"
          element={
            contxt.UserLogIn ? <Home /> : <Navigate to="/loginpage"></Navigate>
          }
        />
        <Route path="/loginpage" element={<LoginForm />} />
        <Route path="/yourprofile" element={<Profile />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
