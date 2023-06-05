import React, { Component, ErrorInfo } from 'react';

import { ErrorBoundaryText } from '@/constants';

import { ErrorMessage, Wrapper } from './styles';
import { ErrorBoundaryProps, ErrorBoundaryState } from './types';

const { message } = ErrorBoundaryText;

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return {
      hasError: true,
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  public render() {
    const { hasError, error, errorInfo } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <Wrapper>
          <ErrorMessage>{message}</ErrorMessage>
          <ErrorMessage>
            {error && error.toString()}
            <br />
            {errorInfo && errorInfo.componentStack}
          </ErrorMessage>
        </Wrapper>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
