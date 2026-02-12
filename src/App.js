import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pagecomponents/Home";
import Contact from "./pagecomponents/Contact";
import Portfolio from "./pagecomponents/Portfolio";
import Services from "./pagecomponents/Services";
import Formations from "./pagecomponents/Formations";

import { useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="header-section">         
        <BrowserRouter>
          <nav className=" navigation-bar">
            <ul className="nav nav-pills">
               <li>
                <Link className="btn btn-outline-info ms-0 link text-start" to="/rodrigue">
                 Rodrigue E.APOTHEY
                </Link>
              </li>
              <li>
                <Link className="btn btn-outline-info ms-0 link" to="/home">
                  Home{" "}
                </Link>
              </li>

              <li>
                <Link
                  className="btn btn-outline-info ms-0 link"
                  to="/portfolio"
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <Link className="btn btn-outline-info ms-0 link" to="/services">
                  Services
                </Link>
              </li>

              <li>
                <Link className="btn btn-outline-info ms-0 link" to="/formations">
                  Formations
                </Link>
              </li>

              <li>
                <Link className="btn btn-outline-info ms-0 link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/formations" element={<Formations />} />
             <Route path="/rodrigue" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </header>

      

    </div>
  );
}

export default App;
