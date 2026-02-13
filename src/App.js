import { BrowserRouter, Routes, Route , NavLink } from "react-router-dom";
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
               <NavLink 
                to="/rodrigue" 
                className={({ isActive }) => 
                  `btn btn-outline-info ms-0 link text-start ${isActive ? 'nav-active' : ''}`
                }
              >
                Rodrigue E.APOTHEY
              </NavLink>
              </li>
                
                <li>
                <NavLink 
                to="/home" 
                className={({ isActive }) => 
                  `btn btn-outline-info ms-0 link   ${isActive ? 'nav-active' : ''}`
                }
              >
                Home
              </NavLink>
                </li>
              
              <li>
               <NavLink 
                to="/portfolio" 
                className={({ isActive }) => 
                  `btn btn-outline-info ms-0 link   ${isActive ? 'nav-active' : ''}`
                }
              >
               Portfolio
              </NavLink>
              </li>

              <li>
               <NavLink 
                to="/services" 
                className={({ isActive }) => 
                  `btn btn-outline-info ms-0 link   ${isActive ? 'nav-active' : ''}`
                }
              >
                Services
              </NavLink>
              </li>

              <li>
                <NavLink 
                to="/formations" 
                className={({ isActive }) => 
                  `btn btn-outline-info ms-0 link   ${isActive ? 'nav-active' : ''}`
                }
              >
                Formations
              </NavLink>
              </li>

              <li>
                <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `btn btn-outline-info ms-0 link   ${isActive ? 'nav-active' : ''}`
                }
              >
                Contact
              </NavLink>
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
