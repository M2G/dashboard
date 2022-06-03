/*eslint-disable*/
import {
  useMemo,
  useState,
  useCallback, useEffect,
} from 'react';
import { remove } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import userListItem from 'containers/UserListItem/UserListItem';
import UserEdit from 'containers/Users/UserEdit';
import UserNew from 'containers/Users/UserNew';
import { signupUserAction } from 'store/signup/actions';
import { authGetUsersProfilAction, authDeleteUserProfilAction, authUpdateUserProfilAction } from 'store/auth/actions';
import TableWrapper from 'components/Core/Table/TableWrapper';
import SidebarWrapper from 'components/Core/Sidebar/SidebarWrapper';
import ModalWrapper from 'components/Core/Modal/ModalWrapper';
import TopLineLoading from 'components/Loading/TopLineLoading';

function UserList({
 id, canEdit = false, canDelete = false, canAdd = false,
}: any) {
  const [editingUser, setEditingUser] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const [deletingUser, setDeletingUser] = useState(false);
  const [userList, setUserList] = useState<any>([]);

  const { data: users, loading } = useSelector((state: any) => state?.auth);
  const { data: signupData } = useSelector((state: any) => state?.signup);

  const dispatch = useDispatch();

  const authGetUsersProfil = () => dispatch(authGetUsersProfilAction());
  const deleteUserAction = (id: string) => dispatch(authDeleteUserProfilAction(id) as any);
  const editUserAction = (params: any) => dispatch(authUpdateUserProfilAction(params) as any);

  const onDelete = useCallback((currentSource: any) => {
    setNewUser(false);
    setEditingUser(false);
    setDeletingUser(currentSource);
  }, []);

  const onClose = useCallback(() => {
    setDeletingUser(false);
    setEditingUser(false);
    setNewUser(false);
  }, []);

  const onAdd = useCallback(() => {
    setNewUser(true);
    setEditingUser(false);
    setDeletingUser(false);
  }, []);

  const onEditUser = useCallback((user: any) => {
    remove(userList, { _id: user._id });
    userList?.push(user);
    setUserList(userList);
    dispatch(editUserAction(user));
    onClose();
  }, [userList]);

  const onEdit = useCallback((user: any) => {
    setEditingUser(user);
    setNewUser(false);
    setDeletingUser(false);
  }, []);

  const onNewUser = useCallback((user: any) => {
    setNewUser(user);
    dispatch(signupUserAction(user));
  }, []);

  const onDeleteUser = useCallback((user: any) => {
    dispatch(deleteUserAction(user._id));
    setUserList(remove(userList, user));
    onClose();
  }, [userList]);

  useEffect(() => {
    authGetUsersProfil();
    onClose();
  }, [signupData]);

  useEffect(() => setUserList(users), [users]);

  const rows = useMemo(
    () =>
      userList?.map((user: any) =>
        userListItem({
          id,
          user,
          onEdit,
          onDelete,
          canDelete,
          canEdit,
        })),
    [userList, id, onEdit, onDelete, canDelete, canEdit, editingUser, newUser, deletingUser, userList]);

  console.log('userList', userList)

  const header = useMemo(
    () => [
      { label: '', sortable: false },
      { label: 'First name', sortable: false },
      { label: 'Last name', sortable: false },
      { label: 'Email', sortable: false },
      { label: 'Created at', sortable: true, type: 'date' },
      { label: 'Modified at', sortable: true, type: 'date' },
    ],
    []);

  if (!userList?.length && loading) return <TopLineLoading />;

  return <>

    {canAdd && <button className="btn btn-primary" type="submit" onClick={onAdd}>ADD</button>}

    {userList?.length ? <TableWrapper id={id} header={header} rows={rows} />
      : <div>No data</div>}

      <SidebarWrapper
        isOpened={editingUser}
        setIsOpened={onClose}>
        <UserEdit
          data={editingUser}
          onSubmit={onEditUser}
        />
      </SidebarWrapper>

      <SidebarWrapper
        isOpened={newUser}
        setIsOpened={onClose}>
        <UserNew onSubmit={onNewUser} />
      </SidebarWrapper>

      <ModalWrapper
        isShowing={deletingUser}
        hide={onClose}>
        <button
          className="btn btn-primary"
          onClick={() => onDeleteUser(deletingUser)}>Delete
        </button>
      </ModalWrapper>

    </>;
}

export default UserList;
