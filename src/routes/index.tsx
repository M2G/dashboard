/* eslint-disable */
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ROUTER_PATH from '../constants/RouterPath';
// import NavBar from '../components/Navbar/NavBar';
import Container from '../components/Layout/Container';
import PrivateRoute from '../routes/ProtectedRoutes';

import Home from '../containers/Home/Home';
import Signin from '../containers/Signin/Signin';
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
const Router = () => {
    return (
        <Routes>
           <Route
               path={ROUTER_PATH.HOME}
               element={
                   <PrivateRoute>
                        <Home />
                   </PrivateRoute>
               }/>
            <Route
                path={ROUTER_PATH.SIGNIN}
                element={
                    <PrivateRoute>
                        <Signin />
                    </PrivateRoute>
                }/>
        </Routes>
    );
}

export default Router;
