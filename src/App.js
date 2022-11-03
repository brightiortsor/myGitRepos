import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./components/Home.js";
import Repos from "./components/Repos.js";
import SingleRepo from "./components/SingleRepo";
import Error from "./components/Error.js";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {}

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

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
              <Link to="/error" className="nav-link">
                Error
              </Link>
            </li>
            <li>
              <Link to="/repos" className="nav-link">
                Repos
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
            </Routes>
          </ErrorBoundary>
        </main>
      </Router>
    </div>
  );
}

export default App;
