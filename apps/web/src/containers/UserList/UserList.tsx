import type { JSX } from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import ModalWrapper from '@/components/Core/Modal/ModalWrapper';
import SidebarWrapper from '@/components/Core/Sidebar/SidebarWrapper';
import TopLineLoading from '@/components/Loading/TopLineLoading';

import NoData from '@/components/NoData';
import UserEdit from '@/components/Users/UserEdit';

import UserNew from '@/components/Users/UserNew';
import UserFilters from '@/containers/UserFilters';
import List from '@/containers/UserList/ListLegacy';
import {
  authDeleteUserProfilAction,
  authGetUsersProfilAction,
  authUpdateUserProfilAction,
} from '@/store/auth/actions';
import { signupUserAction } from '@/store/signup/actions';

import AddUser from './Action/AddUser';
import userListItem from './UserListItem';

type UserListProps = {
  canAdd?: boolean;
  canDelete?: boolean;
  canEdit?: boolean;
  id?: string;
};

enum UserListActions {
  DELETE = 'delete',
  EDIT = 'edit',
  NEW = 'new',
}

function UserList({
  canAdd = false,
  canDelete = false,
  canEdit = false,
  id,
}: UserListProps): JSX.Element | null {
  const { t } = useTranslation();
  const [pagination, setPagination] = useState<{
    page: number;
    pageSize: number;
  }>({
    page: 1,
    pageSize: 2,
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

  const auth = useSelector((stateSelector) => stateSelector.auth);
  const dispatch = useDispatch();

  const authGetUsersProfil = (params: { filters: string; page: number; pageSize: number }) =>
    dispatch(authGetUsersProfilAction(params));
  const deleteUserAction = (id: { id: any }) => dispatch(authDeleteUserProfilAction(id));
  const editUserAction = (params: any) => dispatch(authUpdateUserProfilAction(params));
  const signupAction = (params: any) => dispatch(signupUserAction(params));

  useEffect(() => {
    authGetUsersProfil({
      filters: term,
      page: pagination.page,
      pageSize: pagination.pageSize,
    });
  }, [term, pagination.page, pagination.pageSize]);

  const handleAction = useCallback(
    ({
      deletingUser,
      editingUser,
      newUser,
    }: {
      deletingUser: any;
      editingUser: boolean;
      newUser: boolean;
    }): void => {
      setUser({ deletingUser, editingUser, newUser });
    },
    [],
  );

  const onEditUser = useCallback(
    (user) => {
      editUserAction({ ...user, id: state.editingUser.id });
      authGetUsersProfil({
        filters: term,
        page: pagination.page,
        pageSize: pagination.pageSize,
      });
      handleAction({ deletingUser: false, editingUser: false, newUser: false });
    },
    [
      authGetUsersProfil,
      editUserAction,
      handleAction,
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

      authGetUsersProfil({
        filters: term,
        page: pagination.page,
        pageSize: pageSize || pagination.pageSize,
      });
    },
    [authGetUsersProfil, pagination.page, pagination.pageSize, term],
  );

  const searchTerms = useCallback(
    async (term: string): Promise<void> => {
      setTerm(term);
      authGetUsersProfil({
        filters: term,
        page: pagination.page,
        pageSize: pagination.pageSize,
      });
    },
    [authGetUsersProfil, pagination.page, pagination.pageSize],
  );

  const onChangePage = useCallback(
    async (page: number): Promise<void> => {
      setPagination((prevState) => ({
        ...prevState,
        page,
      }));

      authGetUsersProfil({
        filters: term,
        page: page || pagination.page,
        pageSize: pagination.pageSize,
      });
    },
    [authGetUsersProfil, term, pagination.page, pagination.pageSize],
  );

  const onNewUser = useCallback(
    (user) => {
      // console.log('onNewUser', user);
      setUser(user);
      signupAction(user);
      authGetUsersProfil({
        filters: term,
        page: pagination.page,
        pageSize: pagination.pageSize,
      });
      handleAction({ deletingUser: false, editingUser: false, newUser: false });
    },
    [authGetUsersProfil, handleAction, pagination.page, pagination.pageSize, signupAction, term],
  );

  const onDeleteUser = useCallback(
    (user) => {
      deleteUserAction({ id: user.id });
      authGetUsersProfil({
        filters: term,
        page: pagination.page,
        pageSize: pagination.pageSize,
      });
      handleAction({ deletingUser: false, editingUser: false, newUser: false });
    },
    [
      authGetUsersProfil,
      deleteUserAction,
      handleAction,
      pagination.page,
      pagination.pageSize,
      term,
    ],
  );

  const users = auth?.data || [];
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
          onDelete: (d) => handleAction({ deletingUser: d, editingUser: false, newUser: false }),
          onEdit: (d) => handleAction({ deletingUser: false, editingUser: d, newUser: false }),
          user,
        }),
      ),
    [results, canDelete, canEdit, id, handleAction],
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

  return (
    <div className="c-user-list">
      {canAdd && (
        <AddUser
          onAdd={() => handleAction({ deletingUser: false, editingUser: false, newUser: true })}
        />
      )}
      <UserFilters currentTerm={term} onSearchTerm={searchTerms} />
      {results.length > 0 ? (
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
      ) : (
        <NoData />
      )}
      <SidebarWrapper
        setIsOpened={() =>
          handleAction({ deletingUser: false, editingUser: false, newUser: false })
        }
        isOpened={!!state.editingUser}>
        {state.editingUser && <UserEdit initialValues={state.editingUser} onSubmit={onEditUser} />}
      </SidebarWrapper>

      <SidebarWrapper
        setIsOpened={() =>
          handleAction({ deletingUser: false, editingUser: false, newUser: false })
        }
        isOpened={!!state.newUser}>
        {state.newUser && <UserNew onSubmit={onNewUser} />}
      </SidebarWrapper>

      <ModalWrapper
        onConfirm={() => {
          onDeleteUser(state.deletingUser as unknown as any);
        }}
        hide={() => handleAction({ deletingUser: false, editingUser: false, newUser: false })}
        isShowing={state.deletingUser}
        title="Delete">
        <p>Warning, you are about to perform an irreversible action</p>
      </ModalWrapper>
    </div>
  );
}

export default UserList;
