/* eslint-disable */
import * as React from 'react';
import ErrorBoundary from '../ErrorBoundary';
// import { DEVELOPMENT } from '../../constants';

const DEVELOPMENT = "dev";

const Container: React.FC = ({ children }) => (
  <>
    {process.env.NODE_ENV !== DEVELOPMENT ? (
      // @ts-ignore
      <ErrorBoundary>{children}</ErrorBoundary>
    ) : (
      children
    )}
  </>
);

export default Container;
