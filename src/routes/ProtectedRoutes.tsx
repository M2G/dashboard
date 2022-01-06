/**
 * ProtectedRoutes
 */
/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Route, Navigate, useLocation } from 'react-router';
import ROUTER_PATH from '../constants/RouterPath';
import { getAuthStorage } from '../services/Storage';

function PrivateRoute({ children }: { children: JSX.Element }){
  const location = useLocation();
  const isAuthenticated = getAuthStorage() as string | any;

  if (!isAuthenticated) {
    return <Navigate to={ROUTER_PATH.LOGIN} state={{ from: location }} />;
  }

  return children;
}

export default PrivateRoute;

