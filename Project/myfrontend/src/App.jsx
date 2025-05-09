import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Mynav from "./components/mynav"
import AppRoutes from "./routes/AppRoutes"; // Make sure this path is correct
import Nav from './components/nav'

export default function App() {
  return (
    <Router>
      {/* <Navbar /> */}

      {/* <Mynav/> */}
      <Nav/>
      <AppRoutes />
    </Router>
  );
}
