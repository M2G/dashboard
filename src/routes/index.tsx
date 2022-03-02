/* eslint-disable */
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import ROUTER_PATH from '../constants/RouterPath';
// import NavBar from '../components/Navbar/NavBar';
//import Container from '../components/Layout/Container';
import PrivateRoute from '../routes/ProtectedRoutes';

const Home = lazy(() => import('containers/Home/Home'));
const Signin = lazy(() => import('containers/Signin'));

import TopLineLoading from 'components/Loading/TopLineLoading';
import Navbar from 'components/Navbar/Navbar';
/*
import Identification from '../containers/Identification';
import SigninPlatform from '../containers/SigninPlatform';
import SignIn from '../containers/Signin';

import SignUp from '../containers/Signup';
import SignUpLevel from '../containers/Signup/NewUser/Level';
import SignUpProfil from '../containers/Signup/NewUser/Profil';
import SignUpType from '../containers/Signup/NewUser/Type';

import Reset from '../containers/Reset';
import Forgotyourpassword from '../containers/Forgotyourpassword';
import Forgotyourpasswordchoose from '../containers/Forgotyourpasswordchoose';
*/

/**
 * Top level application router
 *
 * @returns {Component}
 */
const Router = () => (
  <main>
    <Navbar />
    <Routes>
      <Route
        path={ROUTER_PATH.SIGNIN}
        element={
          <Suspense fallback={<TopLineLoading />}>
            <Signin />
          </Suspense>
        }
      />
      <Route
        path={ROUTER_PATH.HOME}
        element={
          <Suspense fallback={<TopLineLoading />}>
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          </Suspense>
        }
      />
    </Routes>
  </main>
);

export default Router;
