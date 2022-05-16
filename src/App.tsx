// import { logError } from "sentry/logError";
// import ErrorPage from "containers/Error/Error";
// import { ErrorBoundary } from "react-error-boundary";
import CustomRouter from 'routes/CustomRouter';
import Routes from './routes';

/*
<ErrorBoundary FallbackComponent={ErrorPage} onError={logError}>
    <CustomRouter history={history}>
      <Routes />
    </CustomRouter>
  </ErrorBoundary>
 */

function App({ history }: any) {
  return <CustomRouter history={history}>
      <Routes />
    </CustomRouter>;
}

export default App;
