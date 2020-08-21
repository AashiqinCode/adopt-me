// mostly code from docs of official react.org/error-boundaries.html
// To catch unwanted/unknown errors from API's
import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundaries extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, redirect: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" noThrow />;
    }

    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to back to the home page or wait five seconds
        </h1>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundaries;
