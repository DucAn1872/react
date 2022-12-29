import React from "react";
import "./App.css";
import "./tailwind.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/page/home";
import Login from "./components/page/login";
import SignUp from "./components/page/signup";

function App() {
  const onButtonSignOut = () => {
    window.location.replace(window.location.origin);
  };
  return (
    <Router>
      <div className="App">
        <nav className="bg-violet-700 flex justify-between p-3 w-full">
          <Link
            className="text-red-600 font-bold text-2xl hover:text-red-500"
            to={"/home"}
          >
            Slowdown2k
          </Link>
          <div className="font-bold text-white flex">
            Welcome to Home!
            <div className="flex hover:text-red-600 ml-3 cursor-pointer border-l-2 pl-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 "
                onClick={onButtonSignOut}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
              Logout
            </div>
          </div>
        </nav>

        <div>
          <Routes>
            <Route exact path="/" element={<Login />} />
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
