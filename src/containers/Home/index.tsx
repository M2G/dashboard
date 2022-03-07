/*eslint-disable*/
// import { useCallback } from 'react';
// import { useDispatch } from 'react-redux';
// import { signinUserAction } from 'store/signin/actions';
import HomeView from './Home';

function Home() {
  /* const dispatch = useDispatch();
    const onSubmit = useCallback(
        (e) => dispatch(signinUserAction(e)),
        [dispatch],
    ); */

  return <HomeView />;
}

export default Home;
