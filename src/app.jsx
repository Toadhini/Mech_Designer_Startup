import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

export default function App() {
  return( 
  <div className="app bg-dark text-light">
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand" href="index.html">Mech Designer</a>
        <div className="navbar-nav">
          <a className="nav-link" href="create.html">Create Mech Sheet</a>
          <a className="nav-link" href="browse.html">Browse Mech Sheets</a>
        </div>
      </div>
    </nav>

    
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container text-center">
        <p className="text-muted mb-0">
          Author: Bennet Hill. To see the full project, check out my 
          <a href="https://github.com/Toadhini/Mech_Designer_Startup" target="_blank" rel="noopener noreferrer"> GitHub repository</a>
        </p>
      </div>
    </footer>
  </div>
  )
}