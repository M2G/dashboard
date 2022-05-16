/*eslint-disable*/
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authGetUsersProfilAction } from 'store/auth/actions';
import Navbar from 'components/Navbar/Navbar';
import TopLineLoading from 'components/Loading/TopLineLoading';
import HomeView from './Home';

function Home() {
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state: any) => state?.auth as any);

  const authGetUsersProfil = () => dispatch(authGetUsersProfilAction() as any);

  useEffect(() => {
    authGetUsersProfil();
  }, []);

  if (loading) return <TopLineLoading />;

  return <>
    <Navbar />
    <HomeView users={data} />
  </>
}

export default Home;
