import type { JSX } from 'react';
import * as Sentry from '@sentry/react';
import { ErrorBoundary } from 'react-error-boundary';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import { logError } from '@/sentry/logError';
import ErrorFallback from '@/containers/Error/Error';
import { LanguageProvider } from '@/LanguageProvider';
import AuthContext from './AuthContext';
import Routes from './routes';
import 'react-toastify/dist/ReactToastify.css';
import './i18n';

function App(): JSX.Element {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={logError}>
      <AuthContext.Provider>
        <BrowserRouter>
          <LanguageProvider>
            <Routes />
            <ToastContainer />
          </LanguageProvider>
        </BrowserRouter>
      </AuthContext.Provider>
    </ErrorBoundary>
  );
}

export default Sentry.withProfiler(App);
