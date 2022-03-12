/*eslint-disable*/
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { authGetUsersProfilAction } from 'store/auth/actions';
import UserFiltersView from './UserFilters';
import { INITIAL_VALUES, INPUT_NAME } from './constants';
const { SEARCH } = INPUT_NAME;

function UserFilters() {
  const dispatch = useDispatch();

  const { data, loading, ...args } = useSelector(
    (state: any) => state?.auth as any
  );

  const searchTerms = useCallback(
    (data) => dispatch(authGetUsersProfilAction({ ...data })),
    []
  );

  function initialValues(searchValue: { [x: string]: string }) {
    const initialValues = { ...INITIAL_VALUES };

    if (searchValue) {
      initialValues[SEARCH] = searchValue?.[SEARCH];
    }

    return initialValues;
  }

  console.log('UserFilters args args args', args);

  return (
    <UserFiltersView
      initialValues={initialValues(args)}
      onSubmit={searchTerms}
    />
  );
}

export default UserFilters;
