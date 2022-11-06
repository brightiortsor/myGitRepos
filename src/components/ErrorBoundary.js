import React, { Component } from "react";
import { Link } from "react-router-dom";

function refreshPage() {
  window.location.reload(false);
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1 className="error-header">Oops! Something went wrong!!!</h1>
          <div className="error-btn">
            <p>To Fix this Error, Kindly</p>
            <Link to="/" className="reload reset btn">
              Reset
            </Link>
            <p className="reload-p"> and</p>
            <button className="btn" onClick={refreshPage}>
              Reload
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
