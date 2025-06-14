import React from "react";
import Preloader from "./Preloader";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from "./pages/Login"
import { ToastContainer, toast } from "react-toastify";
import Signup from "./pages/Signup";
import Home from "./pages/Home";    

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Preloader />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
        </Routes>
        <ToastContainer />
    </Router>
  );
};

export default App;