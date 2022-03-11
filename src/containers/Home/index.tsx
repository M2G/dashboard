/*eslint-disable*/
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { authGetUsersProfilAction } from 'store/auth/actions';
import Navbar from 'components/Navbar/Navbar';
import TopLineLoading from 'components/Loading/TopLineLoading';
import HomeView from './Home';

function Home() {
  const dispatch = useDispatch();

  const { data, loading, ...args } = useSelector(
    (state: any) => state?.auth as any
  );

  console.log({ args, data });

  useEffect(() => dispatch(authGetUsersProfilAction() as any), []);

  const searchTerms = useCallback((data) => {
    dispatch(authGetUsersProfilAction({ ...data }));
  }, []);

  if (loading) return <TopLineLoading />;

  return (
    <>
      <Navbar onSubmit={searchTerms} />
      <HomeView data={data} />
    </>
  );
}

export default Home;
