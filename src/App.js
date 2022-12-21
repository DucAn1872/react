import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/page/home";
import Login from "./components/page/login";
import SignUp from "./components/page/signup";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-light bg-light justify-content-between px-5 bg-dark">
          <Link
            className="navbar-brand font-weight-bold text-danger"
            to={"/home"}
          >
            Slowdown2k
          </Link>
          <div className="d-flex font-weight-bold">
            <Link className="nav-link m-1 text-white" to={"/sign-in"}>
              Login
            </Link>

            <Link className="nav-link m-1 text-white" to={"/sign-up"}>
              Sign up
            </Link>
          </div>
        </nav>

        <div style={{ paddingTop: "100px" }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
