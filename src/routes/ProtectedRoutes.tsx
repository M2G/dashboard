/**
 * ProtectedRoutes
 */
/* eslint-disable */
import { lazy } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
const Home = lazy(() => import('containers/Home/Home'));

const PrivateRoute = ({ children }: { children: JSX.Element }): any => {
  const { auth } = useSelector((state: any) => ({
    ...state,
    auth: state.auth_global,
  }));

  if (auth?.isAuthenticated) return <Home />;

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.any,
};

export default PrivateRoute;
