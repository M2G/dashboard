import { AuthContext } from '@/AuthContext';
import ProfilForm from '@/components/ProfilForm';
import { INITIAL_VALUES, INPUT_NAME } from '@/components/ProfilForm/constants';
import { authGetUserProfilAction } from '@/store/auth/actions';
import { useCallback, useContext, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

function initialValues(values: {
  [x: string]: string;
  id?: any;
  first_name?: any;
  last_name?: any;
  email?: any;
  created_at?: any;
  modified_at?: any;
  password?: any;
}) {
  const initialValues = { ...INITIAL_VALUES };
  if (values) {
    console.log('values values', values);

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

  const { auth: { data } = {} } = useSelector(({ auth }) => ({
    auth,
  }));

  console.log('auth auth auth auth auth auth', data);

  /*
  const { userData }: { userData: { id: number } } = useContext(AuthContext);

  const {
    loading,
    data: userProfil = {
      __typename: 'Query',
      getUser: null,
    },
  }: QueryResult<GetUserQuery, Exact<{ id: number }>> = useGetUserQuery({
    fetchPolicy: 'cache-and-network',
    variables: {
      id: userData?.id,
    },
  });

  const [updateUserMutation, { data: updateProfil }] = useUpdateUserMutation();

  console.log('updateProfil updateProfil', updateProfil);

  const handleSubmit: any = useCallback(
    async (formData: {
      email: any;
      first_name: any;
      last_name: any;
      username: any;
    }) => {
      console.log('userProfil userProfil', userProfil);
      console.log('formData formData', formData);

      await updateUserMutation({
        variables: {
          id: userProfil?.getUser?.id,
          input: {
            email: formData?.email,
            first_name: formData?.first_name,
            last_name: formData?.last_name,
            username: formData?.username,
          },
        },
        optimisticResponse: {
          __typename: 'Mutation',
          updateUser: {
            __typename: 'Status',
            success: true,
          },
        },
      });
    },
    [userProfil, updateUserMutation],
  );

  if (loading && userProfil?.getUser) return null;
*/

  const handleSubmit: any = useCallback(() => {}, []);

  return <ProfilForm initialValues={initialValues({ ...data.data })} onSubmit={handleSubmit} />;
}

const mapStateToProps = (state: { auth: { data: any; loading: boolean } }) => {
  console.log('state state', state);
  return {
    loading: state.auth.loading,
    auth: state.auth.data,
  };
};

export default connect(mapStateToProps)(Profil);
