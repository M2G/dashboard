import type { JSX } from 'react';
import {
 useCallback, useEffect, useMemo, useState,
} from 'react';

import {connect, useDispatch} from "react-redux";
import {
    authGetUsersProfilAction,
    authUpdateUserProfilAction,
    authDeleteUserProfilAction,
} from "store/auth/actions";
import type { IUserListItem } from 'containers/UserList/UserListItem';
import ModalWrapper from 'components/Core/Modal/ModalWrapper';
import SidebarWrapper from 'components/Core/Sidebar/SidebarWrapper';
import TopLineLoading from 'components/Loading/TopLineLoading';
import NoData from 'components/NoData';
import UserFilters from 'containers/UserFilters';
import List from 'containers/UserList/ListLegacy';
import userListItem from 'containers/UserList/UserListItem';
import UserEdit from 'containers/Users/UserEdit';
import UserNew from 'containers/Users/UserNew';
import { UserList } from './types';
import AddUser from './Action/AddUser';
import './index.scss';

function UserList({
  canAdd = false,
  canDelete = false,
  canEdit = false,
  id,
                      loading,
                      users,

}: UserList): JSX.Element {
  const [state, setUser] = useState<{
   // deletingUser?: User | boolean;
   // editingUser?: User | boolean;
    // newUser?: User | boolean;
  }>({
    deletingUser: false,
    editingUser: false,
    newUser: false,
  });
  const [pagination, setPagination] = useState<{
    page: number;
    pageSize: number;
  }>({
    page: 1,
    pageSize: 5,
  });
    const [term, setTerm] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(authGetUsersProfilAction({
            filters: '',
            page: 1,
            pageSize: 5,
        }));
}, [dispatch]);

  console.log(':::::', users);

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
    async (user: any): Promise<void> => {
      dispatch(authUpdateUserProfilAction({ id: user.id }));
      onClose();
    },
    [pagination, onClose],
  );

  const onNewUser = useCallback(
    async (user: any): Promise<void> => {
      dispatch(authUpdateUserProfilAction({ id: user.id }));
      onClose();
    },
    [onClose,
pagination.page,
pagination.pageSize,
term],
  );

  const onDeleteUser = useCallback(
    async (user: any): Promise<void> => {
      dispatch(authDeleteUserProfilAction({ id: user.id }));
      dispatch(authGetUsersProfilAction({
            filters: term,
            page: pagination.page,
            pageSize: pagination.pageSize,
        }));
      onClose();
    },
    [dispatch,
onClose,
pagination.page,
pagination.pageSize,
term],
  );

  const searchTerms = useCallback(
    async (search: string): Promise<void> => {
      setTerm(search);
        dispatch(authGetUsersProfilAction({
            filters: search,
            page: pagination.page,
            pageSize: pagination.pageSize,
        }));
    },
    [dispatch,
        pagination.page,
        pagination.pageSize],
      );

  const onChangePage = useCallback(
    async (page: number): Promise<void> => {
     setPagination((prevState) => ({
       ...prevState,
       page,
     }));
     dispatch(authGetUsersProfilAction({
            filters: term,
            page: page || pagination.page,
            pageSize: pagination.pageSize,
        }));
    },
    [
        term,
        pagination.page,
        pagination.pageSize,
    ],
  );

  const onChangePageSize = useCallback(
    async (pageSize: number): Promise<void> => {
      setPagination((prevState) => ({
        ...prevState,
        pageSize,
      }));

        dispatch(authGetUsersProfilAction({
            filters: term,
            page: pagination.page,
            pageSize: pageSize || pagination.pageSize,
        }));
    },
    [
        dispatch,
        pagination.page,
        pagination.pageSize,
        term,
    ],
  );

  const results = users?.results || [];
  const pageInfo = users?.pageInfo || {};

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
        } as IUserListItem)),
    [
        results,
        canDelete,
        canEdit,
        id,
        onDelete,
        onEdit,
    ],
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

  if (loading) return <TopLineLoading />;

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
        <UserEdit data={state.editingUser} onSubmit={onEditUser} />
      </SidebarWrapper>

      <SidebarWrapper isOpened={!!state.newUser} setIsOpened={onClose}>
        <UserNew onSubmit={onNewUser} />
      </SidebarWrapper>

      <ModalWrapper
        onConfirm={async () =>
          onDeleteUser(state.deletingUser as unknown as any)
        }
        hide={onClose}
        isShowing={state.deletingUser}
        title="Delete"
      >
        <p>Warning, you are about to perform an irreversible action</p>
      </ModalWrapper>
    </div>
  );
}

const mapStateToProps = (state: { auth: { data: any; loading: any } }) => {
    console.log('UserList UserList UserList UserList', state);
    return {
        users: state.auth.data,
        loading: state.auth.loading,
    };
};

export default connect(mapStateToProps)(UserList);
