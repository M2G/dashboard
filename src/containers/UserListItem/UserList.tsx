/*eslint-disable*/
import {
  useMemo,
  useState,
  useCallback, useEffect,

} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userListItem from 'containers/UserListItem/UserListItem';
import UserEdit from 'containers/Users/UserEdit';
import UserNew from 'containers/Users/UserNew';
import { signupUserAction } from 'store/signup/actions';
import { authGetUsersProfilAction } from 'store/auth/actions';
import TableWrapper from 'components/Core/Table/TableWrapper';
import SidebarWrapper from 'components/Core/Sidebar/SidebarWrapper';
import ModalWrapper from 'components/Core/Modal/ModalWrapper';
import TopLineLoading from 'components/Loading/TopLineLoading';

const Form = () => <div id="test">TEST</div>

const UserList = ({ id, canEdit = false, canDelete = false, canAdd = false }: any) => {
  const [editingUser, setEditingUser] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const [deletingUser, setDeletingUser] = useState(false);

  const { data: users, loading } = useSelector((state: any) => state?.auth as any);
  const { data: signupData } = useSelector((state: any) => state?.signup as any);

  const dispatch = useDispatch();

  console.log('loading :', loading)
  console.log('users : ', users)

  const onDelete = useCallback((currentSource: any) => {
    console.log('onDelete', currentSource);
    setNewUser(false);
    setDeletingUser(currentSource);
    setEditingUser(false);
  }, []);

  const onClose = useCallback(() => {
    console.log('onClose onClose onClose');
    setDeletingUser(false);
    setEditingUser(false);
    setNewUser(false);
  }, []);

  const onAdd = useCallback(() => {
    setNewUser(true);
    setEditingUser(false);
    setDeletingUser(false);
  }, []);

  const onEdit = useCallback((currentSource: any) => {
    console.log('onEdit', currentSource);
    setNewUser(false);
    setEditingUser(currentSource);
    setNewUser(false);
  }, []);

  const onNewUser = useCallback((user: any) => {
    console.log('onNewUser', user);
    setNewUser(user);
    setEditingUser(false);
    setDeletingUser(false);
    dispatch(signupUserAction(user));
  }, []);

  const authGetUsersProfil = () => dispatch(authGetUsersProfilAction() as any);

  useEffect(() => {
    authGetUsersProfil();
    onClose();
  }, [signupData]);

  const rows = useMemo(
    () =>
      users?.map((user: any) =>
        userListItem({
          id,
          user,
          onEdit,
          onDelete,
          canDelete,
          canEdit,
        })
      ),
    [users, id, onEdit, onDelete, canDelete, canEdit]
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
    []
  );

  if (!users?.length && loading) return <TopLineLoading />;

  return <>

    {canAdd && <div onClick={onAdd}>ADD</div>}

    {users?.length ?
      <TableWrapper id={id} header={header} rows={rows} />
      : <div>No data</div>}

      <SidebarWrapper
        isOpened={!!editingUser}
        setIsOpened={onClose}>
        <UserEdit data={editingUser} />
      </SidebarWrapper>

    <SidebarWrapper
      isOpened={!!newUser}
      setIsOpened={onClose}>
      <UserNew onSubmit={onNewUser} />
    </SidebarWrapper>

    <ModalWrapper
      isShowing={!!deletingUser}
      hide={onClose}>
      <Form />
    </ModalWrapper>

    </>
};

export default UserList;
