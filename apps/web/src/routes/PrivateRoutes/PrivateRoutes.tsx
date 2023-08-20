import type { JSX } from 'react';

import ROUTER_PATH from '@/constants/RouterPath';
import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('@/containers/Home'));
const Users = lazy(() => import('@/containers/Users'));
const ChangePassword = lazy(() => import('@/containers/ChangePassword'));
const Profil = lazy(() => import('@/containers/Profil'));

function PrivateRoutes(): JSX.Element {
  return (
    <Routes>
      <Route element={<Home />} path={ROUTER_PATH.HOME} />
      <Route element={<Users />} path={ROUTER_PATH.USERS} />
      <Route element={<Profil />} path={ROUTER_PATH.PROFIL} />
      <Route element={<ChangePassword />} path={ROUTER_PATH.CHANGE_PASSWORD} />
      <Route element={<Navigate replace to={ROUTER_PATH.HOME} />} path="*" />
    </Routes>
  );
}

export default PrivateRoutes;
