import { AuthContext } from '@/AuthContext';
import ProfilForm from '@/components/ProfilForm';
import { INITIAL_VALUES, INPUT_NAME } from '@/components/ProfilForm/constants';
import { authGetUserProfilAction, authUpdateUserProfilAction } from '@/store/auth/actions';
import { useCallback, useContext, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

function initialValues(values: { [x: string]: string }): any {
  const initialValues = { ...INITIAL_VALUES };
  if (values) {
    initialValues[INPUT_NAME.FIRST_NAME] = values?.[INPUT_NAME.FIRST_NAME] || '';
    initialValues[INPUT_NAME.LAST_NAME] = values?.[INPUT_NAME.LAST_NAME] || '';
    initialValues[INPUT_NAME.EMAIL] = values?.[INPUT_NAME.EMAIL] || '';
  }

  return initialValues;
}

function Profil(): JSX.Element | null {
  const { userData }: { userData: { id: number } } = useContext(AuthContext);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('userData userData', userData);
    dispatch(authGetUserProfilAction({ id: userData?.id }));
  }, [dispatch, userData]);

  const { auth: { data: { data } } = {} } = useSelector(({ auth }) => ({
    auth,
  }));

  console.log('auth auth auth auth auth auth', data);

  const handleSubmit = useCallback(
    (data) => {
      dispatch(authUpdateUserProfilAction({ ...data, id: userData?.id }));
    },
    [dispatch, userData?.id],
  );

  return (
    data && (
      <ProfilForm
        initialValues={
          // initialValues({ ...data })
          { ...data }
        }
        onSubmit={handleSubmit}
      />
    )
  );
}

const mapStateToProps = (state: { auth: { data: never; loading: boolean } }) => {
  console.log('state state', state);
  return {
    auth: state.auth.data,
    loading: state.auth.loading,
  };
};

export default connect(mapStateToProps)(Profil);
