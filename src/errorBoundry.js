import React, { Component } from "react";
import { link, Link } from "@reach/router";

class ErrorBoundry extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundry caught an error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to="/">Click Here</Link>{" "}
          to go back to the Home Page or wait 5 seconds.
        </h1>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundry;
