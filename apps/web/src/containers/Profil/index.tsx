import Navbar from '@/components/Navbar/Navbar';
import Sidebar from '@/components/Sidebar';
import Profil from './Profil';

function ProfilPage(): JSX.Element {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Profil />
    </>
  );
}

export default ProfilPage;
