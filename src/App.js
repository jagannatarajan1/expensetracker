import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./components/login/loginForm";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <React.Fragment>
      <Suspense fallback={<p>Loading the page.....</p>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <LoginForm></LoginForm>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
