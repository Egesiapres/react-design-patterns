// for error boundaries we use CLASS COMPONENT, one of the only remaining scenario
import React from "react";

// highly reusable
// detects the error according to the nesting level of the component that is wrapping
// works for rendering errors, not for async errors & API related errors
export class ErrorBoundary extends React.Component {
  state = { hasError: false };

  // hahaha it's ok not to know
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  // f to catch the errors for logging
  componentDidCatch(error) {
    console.log("Error", error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}
