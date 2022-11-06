import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./components/Home.js";
import Repos from "./components/Repos.js";
import SingleRepo from "./components/SingleRepo";
import Error from "./components/Error.js";
import ErrorBoundary from "./components/ErrorBoundary";
import TestError from "./components/TestError";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="container">
          <ul className="menu">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li>
              <Link to="/repos" className="nav-link">
                Repos
              </Link>
            </li>
            <li>
              <Link to="/error" className="nav-link">
                Error 404
              </Link>
            </li>
            <li>
              <Link to="/testerror" className="nav-link">
                ErrorBoundary
              </Link>
            </li>
          </ul>
        </nav>

        <main>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/repos" element={<Repos />} />
              <Route path="/repos/:userId" element={<SingleRepo />} />
              <Route path="*" element={<Error />} />
              <Route path="/testerror" element={<TestError />} />
            </Routes>
          </ErrorBoundary>
        </main>
      </Router>
    </div>
  );
}

export default App;
