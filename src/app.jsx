import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./app.css";

import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Create } from "./create/create";
import { Browse } from "./browse/browse";
import { Login } from "./login/login";

export default function App() {
  return( 
  <BrowserRouter>
    <div className="app bg-dark text-light">
      <header className='container-fluid'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Mech Designer</NavLink>
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/create">Create Mech Sheet</NavLink>
              <NavLink className="nav-link" to="/browse">Browse Mech Sheets</NavLink>
            </div>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create" element={<Create />} />
        <Route path="/browse" element={<Browse />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <footer className="footer mt-auto py-3 bg-light">
        <div className="container text-center">
          <p className="text-muted mb-0">
            Author: Bennet Hill. To see the full project, check out my 
            <a href="https://github.com/Toadhini/Mech_Designer_Startup" target="_blank" rel="noopener noreferrer"> GitHub repository</a>
          </p>
        </div>
      </footer>
    </div>
  </BrowserRouter>
  );
}

function NotFound() {
  return (
    <main className="container py-4">
      <div className="row mb-4">
        <div className="col-12">
          <h2 className="display-5">404 - Not Found</h2>
          <p className="lead">The page you are looking for does not exist.</p>
        </div>
      </div>
    </main>
  );
}