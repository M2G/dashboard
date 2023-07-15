import type { JSX } from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';

import ModalWrapper from '@/components/Core/Modal/ModalWrapper';
import SidebarWrapper from '@/components/Core/Sidebar/SidebarWrapper';
import TopLineLoading from '@/components/Loading/TopLineLoading';
import NoData from '@/components/NoData';
import UserEdit from '@/components/Users/UserEdit';
import UserNew from '@/components/Users/UserNew';
import UserFilters from '@/containers/UserFilters';
import List from '@/containers/UserList/ListLegacy';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
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

function UserList({
  canAdd = false,
  canDelete = false,
  canEdit = false,
  id,
}: UserListProps): null | JSX.Element {
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
  any = useSelector(({ auth, signup }) => ({
    auth,
    signup,
  }));

  const dispatch = useDispatch();

  const authGetUsersProfil = (params) => dispatch(authGetUsersProfilAction(params));
  const deleteUserAction = (id: number) => dispatch(authDeleteUserProfilAction(id));
  const editUserAction = (params) => dispatch(authUpdateUserProfilAction(params));
  const signupAction = (params) => dispatch(signupUserAction(params));

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
      onClose();
    },
    [authGetUsersProfil, onClose, pagination.page, pagination.pageSize, signupAction, term],
  );

  const onDeleteUser = useCallback(
    (user) => {
      deleteUserAction({ id: user.id });
      authGetUsersProfil({
        filters: term,
        page: pagination.page,
        pageSize: pagination.pageSize,
      });
      onClose();
    },
    [authGetUsersProfil, deleteUserAction, onClose, pagination.page, pagination.pageSize, term],
  );

  const users: any = auth?.data || [];
  const results = users?.results || [];
  const pageInfo = users?.pageInfo || {};

  console.log('auth', auth);

  const rows = useMemo(
    () =>
      results?.map((user) =>
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

  return (
    <div className="c-user-list">
      <AddUser canAdd={canAdd} onAdd={onAdd} />

      {results.length ? (
        <>
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
            onConfirm={() => {
              onDeleteUser(state.deletingUser as unknown as any);
            }}
            hide={onClose}
            isShowing={state.deletingUser}
            title="Delete">
            <p>Warning, you are about to perform an irreversible action</p>
          </ModalWrapper>
        </>
      ) : (
        <NoData />
      )}
    </div>
  );
}

export default UserList;
