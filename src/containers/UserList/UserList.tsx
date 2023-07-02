import { useMemo, useState, useCallback, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import userListItem from './UserListItem';
import UserEdit from 'components/Users/UserEdit';
import UserNew from 'components/Users/UserNew';
import { signupUserAction } from 'store/signup/actions';
import {
  authGetUsersProfilAction,
  authDeleteUserProfilAction,
  authUpdateUserProfilAction,
} from 'store/auth/actions';
import SidebarWrapper from 'components/Core/Sidebar/SidebarWrapper';
import ModalWrapper from 'components/Core/Modal/ModalWrapper';
import TopLineLoading from 'components/Loading/TopLineLoading';
import List from 'containers/UserList/ListLegacy';
import NoData from 'components/NoData';
import UserFilters from 'containers/UserFilters';
import AddUser from './Action/AddUser';

function UserList({ id, canEdit = false, canDelete = false, canAdd = false }) {
  const { t } = useTranslation();
  const [pagination, setPagination] = useState<{
    page: number;
    pageSize: number;
  }>({
    page: 1,
    pageSize: 5,
  });
  const [term, setTerm] = useState('');
  const [state, setUser] = useState<{
    deletingUser?: any | boolean;
    editingUser?: any | boolean;
    newUser?: any | boolean;
  }>({
    deletingUser: false,
    editingUser: false,
    newUser: false,
  });

  const {
    auth,
  }: // signup
  any = useSelector(({ signup, auth }) => ({
    auth,
    signup,
  }));

  const dispatch = useDispatch();

  const authGetUsersProfil = (params: any) => dispatch(authGetUsersProfilAction(params));
  const deleteUserAction = (id: number) => dispatch(authDeleteUserProfilAction(id));
  const editUserAction = (params: any) => dispatch(authUpdateUserProfilAction(params));
  const signupAction = (params: any) => dispatch(signupUserAction(params));

  useEffect(() => {
    authGetUsersProfil({
      filters: term,
      page: pagination.page,
      pageSize: pagination.pageSize,
    });
  }, [term, pagination]);

  const onDelete = useCallback((user: any): void => {
    setUser({ deletingUser: user, editingUser: false, newUser: false });
  }, []);

  const onClose = useCallback(() => {
    setUser({ deletingUser: false, editingUser: false, newUser: false });
  }, []);

  const onAdd = useCallback((): void => {
    setUser({ deletingUser: false, editingUser: false, newUser: true });
  }, []);

  const onEdit = useCallback((user: any): void => {
    setUser({ deletingUser: false, editingUser: user, newUser: false });
  }, []);

  const onEditUser = useCallback(
    (user) => {
      editUserAction({ ...user, id: state.editingUser.id });
      authGetUsersProfil({
        filters: term,
        page: pagination.page,
        pageSize: pagination.pageSize,
      });
      onClose();
    },
    [
      authGetUsersProfil,
      editUserAction,
      onClose,
      pagination.page,
      pagination.pageSize,
      state.editingUser.id,
      term,
    ],
  );

  const onChangePageSize = useCallback(
    async (pageSize: number): Promise<void> => {
      setPagination((prevState) => ({
        ...prevState,
        pageSize,
      }));

      /* await getUsers({
        variables: {
          filters: term,
          page: pagination.page,
          pageSize: pageSize || pagination.pageSize,
        },
      });*/
    },
    [pagination],
  );

  const searchTerms = useCallback(
    async (term: string): Promise<void> => {
      setTerm(term);
      /*
      await getUsers({
        variables: {
          filters: term,
          page: pagination.page,
          pageSize: pagination.pageSize,
        },
      });*/
    },
    [pagination.page, pagination.pageSize],
  );

  const onChangePage = useCallback(
    async (page: number): Promise<void> => {
      setPagination((prevState) => ({
        ...prevState,
        page,
      }));
      /*
           await getUsers({
             variables: {
               filters: term,
               page: page || pagination.page,
               pageSize: pagination.pageSize,
             },
           });*/
    },
    [term, pagination.page, pagination.pageSize],
  );

  const onNewUser = useCallback(
    (user: any) => {
      console.log('onNewUser', user);
      // setNewUser(user);
      // signupAction(user);
      // authGetUsersProfil();
      onClose();
    },
    [onClose],
  );

  const onDeleteUser = useCallback((user: any) => {
    //deleteUserAction(user._id);
    //authGetUsersProfil();
    onClose();
  }, []);

  const users: any = auth?.data || [];
  const results = users?.results || [];
  const pageInfo = users?.pageInfo || {};

  console.log('auth', auth);

  const rows = useMemo(
    () =>
      results?.map((user: any) =>
        userListItem({
          canDelete,
          canEdit,
          id,
          onDelete,
          onEdit,
          user,
        } as any),
      ),
    [results, canDelete, canEdit, id, onDelete, onEdit],
  );

  const header = useMemo(
    () => [
      { label: '', sortable: false },
      { label: 'First name', sortable: false },
      { label: 'Last name', sortable: false },
      { label: 'Email', sortable: false },
      { label: 'Created at', sortable: true, type: 'date' },
      { label: 'Modified at', sortable: true, type: 'date' },
    ],
    [],
  );

  if (!users?.length && auth.loading) return <TopLineLoading />;

  console.log('state.editingUser', state.editingUser);

  return (
    <div className="c-user-list">
      <AddUser canAdd={canAdd} onAdd={onAdd} />

      {!results.length && <NoData />}
      <UserFilters currentTerm={term} onSearchTerm={searchTerms} />
      <List
        count={pageInfo?.count}
        currentPage={pagination?.page}
        currentPageSize={pagination?.pageSize}
        data={results}
        header={header}
        id={id}
        rows={rows}
        setCurrentPage={onChangePage}
        setCurrentPageSize={onChangePageSize}
      />

      <SidebarWrapper isOpened={!!state.editingUser} setIsOpened={onClose}>
        <UserEdit initialValues={state.editingUser} onSubmit={onEditUser} />
      </SidebarWrapper>

      <SidebarWrapper isOpened={!!state.newUser} setIsOpened={onClose}>
        <UserNew onSubmit={onNewUser} />
      </SidebarWrapper>

      <ModalWrapper
        onConfirm={async () => onDeleteUser(state.deletingUser as unknown as any)}
        hide={onClose}
        isShowing={state.deletingUser}
        title="Delete">
        <p>Warning, you are about to perform an irreversible action</p>
      </ModalWrapper>
    </div>
  );
}

export default UserList;
