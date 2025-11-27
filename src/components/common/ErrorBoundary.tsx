import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center p-10">
          <h2 className="text-2xl font-bold mb-3">Something went wrong</h2>
          <p className="text-base-content/70">Reload and try again</p>
        </div>
      );
    }

    return this.props.children;
  }
}
