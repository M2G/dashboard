/*eslint-disable*/
// import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import UserEditView from 'containers/Users/UserEdit/UserEdit';
import { INITIAL_VALUES, INPUT_NAME } from './constants';
// import { authGetUsersProfilAction } from 'store/auth/actions';

function UserEdit({ data }: any) {

  const onSubmit = useCallback(
    (arg: any) => console.log('--------->', arg),
    []
  );


  function initialValues(values: any) {
    const initialValues = { ...INITIAL_VALUES };

    if (values) {
      initialValues[INPUT_NAME.FIRST_NAME] = values?.[INPUT_NAME.FIRST_NAME];
      initialValues[INPUT_NAME.LAST_NAME] = values?.[INPUT_NAME.LAST_NAME];
      initialValues[INPUT_NAME.EMAIL] = values?.[INPUT_NAME.EMAIL];
    }

    return initialValues;
  }

  return <UserEditView
      initialValues={initialValues(data)}
      onSubmit={onSubmit}
    />
}

export default UserEdit;
