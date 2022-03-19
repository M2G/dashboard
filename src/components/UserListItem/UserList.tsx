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

const Userist = ({ users, id }: any) => {
  const [editing, setEditing] = useState(null);
  const [source, setSource] = useState(null);
  const [deletingSource, setDeletingSource] = useState(null);
  // const dispatch = useDispatch();

  console.log({ editing, source, deletingSource });

  const canEdit = true;
  const canDelete = true;

  const onDelete = useCallback((currentSource) => {
    console.log('onDelete', currentSource);

    setDeletingSource(currentSource);
  }, []);

  const onEdit = useCallback((currentSource) => {
    console.log('onEdit', currentSource);
    setEditing(currentSource);
    setSource(null);
    setDeletingSource(null);
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

  return <TableWrapper id="gdgdfxgx" header={header} rows={rows} />;
};

export default Userist;
