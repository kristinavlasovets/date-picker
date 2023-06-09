import { ReactNode } from 'react';

export interface ErrorBoundaryProps {
  children: ReactNode;
}
export interface ErrorBoundaryState {
  hasError: boolean;
  error?: null | Error;
  errorInfo?: null | { componentStack: string };
}
