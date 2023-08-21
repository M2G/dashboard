import { AuthContext } from '@/AuthContext';
import ChangePassordForm from '@/components/ChangePassordForm';
import { useCallback, useContext } from 'react';

function ChangePassword(): JSX.Element {
  const {
    userData: { id: id },
  } = useContext(AuthContext);
  // const [changePassword] = useUpdateUserMutation();
  const handleSubmit = useCallback(async () => {}, []);

  return <ChangePassordForm initialValues={{}} onSubmit={handleSubmit} />;
}

export default ChangePassword;
