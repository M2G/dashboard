/*eslint-disable*/
// import { useCallback } from 'react';
// import { useDispatch } from 'react-redux';
// import { signinUserAction } from 'store/signin/actions';
import DashboardView from './Dashboard';

function Dashboard() {
  /* const dispatch = useDispatch();
    const onSubmit = useCallback(
        (e) => dispatch(signinUserAction(e)),
        [dispatch],
    ); */

  return <DashboardView />;
}

export default Dashboard;
