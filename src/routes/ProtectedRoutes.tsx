/**
 * ProtectedRoutes
 */
/* eslint-disable */
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }: { children: JSX.Element }): any => {
  const { auth } = useSelector((state: any) => ({
    ...state,
    auth: state.auth_global,
  }));
  const location = useLocation();

  console.log('auth?.isAuthenticated auth?.isAuthenticated', auth);

  if (auth?.isAuthenticated)
    return <Navigate to="/signin" state={{ from: location }} replace />;

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.any,
};

export default PrivateRoute;
