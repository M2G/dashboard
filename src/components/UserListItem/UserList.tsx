/*eslint-disable*/
import {
  // useEffect,
  useMemo,
  useState,
  useCallback,
} from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import userListItem from 'components/UserListItem/UserListItem';
import TableWrapper from 'components/Core/Table/TableWrapper';
import SidebarWrapper from 'components/Core/Sidebar/Sidebar';

const UserList = ({ users, id, canEdit = false, canDelete = false }: any) => {
  const [editing, setEditing] = useState(false);
  const [source, setSource] = useState(false);
  const [deletingSource, setDeletingSource] = useState(false);
  // const dispatch = useDispatch();

  const onDelete = useCallback((currentSource) => {
    console.log('onDelete', currentSource);

    setDeletingSource(currentSource);
  }, []);

  const onClose = useCallback(() => {
    console.log('onClose onClose onClose');

    setEditing(false);
    setSource(false);
    setDeletingSource(false);
  }, []);

  const onEdit = useCallback((currentSource) => {
    console.log('onEdit', currentSource);
    setEditing(currentSource);
    setSource(false);
    setDeletingSource(false);
  }, []);

  const rows = useMemo(
    () =>
      users.map((user: any) =>
        userListItem({
          id,
          user,
          onEdit,
          onDelete,
          canDelete,
          canEdit,
        })
      ),
    [id, onEdit, onDelete, canDelete, canEdit]
  );

  console.log({ editing, source, deletingSource });
  console.log('editing', !!editing);
  const header = useMemo(
    () => [
      { label: '', sortable: false },
      { label: 'first_name', sortable: false },
      { label: 'email', sortable: false },
      {
        label: 'created_at',
        sortable: true,
        type: 'date',
        defaultSort: true,
      },
      { label: 'modified_at', sortable: true },
    ],
    []
  );

  return (
    <>
      <TableWrapper id="gdgdfxgx" header={header} rows={rows} />
      <SidebarWrapper
        key={`edit__${id}`}
        id={id}
        isOpened={!!editing}
        setIsOpened={onClose}
      />
    </>
  );
};

export default UserList;
