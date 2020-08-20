// mostly code from docs of official react.org/error-boundaries.html
// To catch unwanted/unknown errors from API's
import React, { Component } from "react";
import { Link, navigate } from "@reach/router";

class ErrorBoundaries extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error Boundary error caught", error, info);
  }

  // This lifecycle method run every time when props/state changes,used to clean up things before the DOM demounts
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(
        // () => this.setState({ redirect: true }),
        navigate("/"),
        15000
      );
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was an with this listing . <Link to="/">Click here</Link> to go
          back to home page or wait for 5 seconds
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundaries;
